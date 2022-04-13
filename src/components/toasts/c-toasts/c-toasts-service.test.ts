/*
© 2022 Edgecast Inc.
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {CToastsService} from './c-toasts-service';

describe('Audience List route', () => {
    let component;

    beforeEach(() => {
        jest.useFakeTimers();
        component = new CToastsService();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('should defined an empty array of toasts', done => {
        expect(component.toasts.length).toBe(0);
        done();
    });

    it('should return null for a non existant toast message', done => {
        const result = component.getVToastById('test');
        expect(result).toBe(null);
        done();
    });

    it('should toast a success message', () => {
        // component.success('Success Message', 'My Success Title', 0);
        component.success('Success Message');
        expect(setTimeout).toHaveBeenCalledTimes(1);
    });

    it('should toast a warning message', () => {
        component.warning('Warning Message');
        expect(setTimeout).toHaveBeenCalledTimes(1);
    });

    it('should toast an error message', () => {
        component.error('Error Message');
        expect(setTimeout).toHaveBeenCalledTimes(1);
    });

    it('should toast an info message', () => {
        component.info('Info Message');
        expect(setTimeout).toHaveBeenCalledTimes(1);
    });

    it('should add a success message', () => {
        component.add('success', 'message', 'title');
        // Fast-forward until all timers have been executed
        jest.runAllTimers();
        expect(setTimeout).toHaveBeenCalledTimes(1);
    });

    it('should manaully add a success message', () => {
        const id = new Date().getTime();
        component.toasts.unshift({
            id,
            message: 'message',
            title: 'title',
            type: 'success',
        });
        component.setTimeout(id);
        expect(setTimeout).toHaveBeenCalledTimes(1);
    });

    it('should manaully add a success message and then issue keepAlive', () => {
        const id = new Date().getTime();
        component.toasts.unshift({
            id,
            message: 'message',
            title: 'title',
            type: 'success',
        });
        component.setTimeout(id);
        component.keepAlive(id);
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(clearTimeout).toHaveBeenCalledTimes(1);
    });

    it('should manaully add a success message and then issue resetTimeout', () => {
        const id = new Date().getTime();
        component.toasts.unshift({
            id,
            message: 'message',
            removeTimeout: true,
            title: 'title',
            type: 'success',
        });
        component.setTimeout(id);
        component.resetTimeout(id);
        expect(setTimeout).toHaveBeenCalledTimes(2);
    });

    it('should manaully add a success message with removeTimeout and then issue resetTimeout', () => {
        const id = new Date().getTime();
        component.toasts.unshift({
            id,
            message: 'message',
            removeTimeout: true,
            title: 'title',
            type: 'success',
        });
        component.setTimeout(id);
        expect(setTimeout).toHaveBeenCalledTimes(1);
    });
});
