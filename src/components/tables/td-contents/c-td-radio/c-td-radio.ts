export class CTdRadio {
    public actions = {
        onChange: () => this.onChange(),
    };
    public row;
    public col;

    public activate(model) {
        this.row = model.row;
        this.col = model.col;
    }

    private onChange() {
        if (this.col.checkChanged) this.col.checkChanged();
    }
}
