/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {DialogService} from 'aurelia-dialog';
import {Container, LogManager} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

const log = LogManager.getLogger('DirtyCheckPrompt');

export function dirtyCheckPrompt<T extends new (...args: any[]) => {}>(constructor: T) {
    return class DirtyCheckPrompt extends constructor {
        public isDirty: () => boolean;
        public save: () => Promise<any>;
        public onDirtyPromptStay: () => void;
        public onDirtyPromptLeave: (output: boolean) => void;
        public canDeactivate(): Promise<boolean> {
            if (!_.isFunction(this.isDirty)) {
                log.error(
                    `[${this.constructor.name}] @dirtyCheckPrompt decorator used ` +
                        'but isDirty function not defined.',
                );
                return Promise.resolve(true);
            }
            if (this.isDirty()) {
                return Container.instance
                    .get(DialogService)
                    .open({
                        model: {
                            bodyViewModel: PLATFORM.moduleName('@bindable-ui/bindable/decorators/dirty-check-prompt/modal/body'),
                            footerEnable: true,
                            footerModel: {
                                canSave: _.isFunction(this.save),
                                isLoading: false,
                                save: async () => await this.save(),
                            },
                            footerViewModel: PLATFORM.moduleName('@bindable-ui/bindable/decorators/dirty-check-prompt/modal/footer'),
                            size: 'medium',
                            title: 'Are you sure you want to leave?',
                        },
                        viewModel: PLATFORM.moduleName('@bindable-ui/bindable/components/modal/c-modal/c-modal'),
                    })
                    .whenClosed(async response => {
                        if (response.wasCancelled) {
                            // Review Changes or save action via dirty check modal throwed error.
                            if (_.isFunction(this.onDirtyPromptStay)) {
                                this.onDirtyPromptStay();
                            }
                        } else {
                            // Discard (response.output = false) or Save success (response.output = true)
                            if (_.isFunction(this.onDirtyPromptLeave)) {
                                this.onDirtyPromptLeave(response.output);
                            }
                        }
                        return !response.wasCancelled;
                    });
            }
            if (_.isFunction(this.onDirtyPromptLeave)) {
                this.onDirtyPromptLeave(false);
            }
            return Promise.resolve(true);
        }
    };
}
