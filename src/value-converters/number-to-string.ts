export class NumberToStringValueConverter {
    public toView(value) {
        if (value === null || value === '') return null;
        return String(`${value}`);
    }
}
