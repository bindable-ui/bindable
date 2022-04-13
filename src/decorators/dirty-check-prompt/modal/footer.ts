/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class FooterBody {
    public controller: any;
    public model: any;

    public activate(model) {
        this.model = model.footer;
        this.controller = model.controller;
    }

    public async save() {
        if (this.model.canSave) {
            try {
                this.model.isLoading = true;
                await this.model.save();
                this.controller.ok(true);
            } catch (e) {
                // Parent function should show toaster
                this.controller.cancel();
            } finally {
                this.model.isLoading = false;
            }
        } else {
            this.controller.cancel();
        }
    }
}
