/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {child, processContent} from 'aurelia-framework';

const MAX_RENDER_RETRIES = 25;
const RETRY_TIMEOUT = 5;

@processContent((_compiler, _resources, node) => {
    const originalHtml = node.innerHTML;
    const stringified = JSON.stringify(originalHtml);
    node.innerHTML = `<code-sample data.bind='${stringified}'></code-sample>`;
    node.innerHTML += `<template replace-part="rendered">${originalHtml}</template>`;
    return true;
})
export class CCodeSample {
    @child('code-sample')
    public codeSample;
    public renderTries = 0;
    public code;

    public attached() {
        this.render();
    }

    public render() {
        this.renderTries += 1;

        try {
            this.code = this.codeSample.data;
            this.trimCode();
        } catch (err) {
            if (this.renderTries < MAX_RENDER_RETRIES) {
                setTimeout(() => {
                    this.render();
                }, RETRY_TIMEOUT);
            }
        }
    }

    public trimCode() {
        // take the number of leading spaces on the first line of code and remove them from each
        // line of code.
        const regex = /^\n(\s+)/;
        const res = this.code.match(regex) || '';
        if (res.length > 1) {
            const spaces = res[1];
            const replaceRegex = new RegExp(`(\n)${spaces}`, 'g');
            this.code = this.code.replace(replaceRegex, '$1').trim();
        }
    }
}
