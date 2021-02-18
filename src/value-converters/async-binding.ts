/**
 * This will allow you to pipe an promise to a value converter
 *
 * ex. `value | value-converter & async`
 */
export class AsyncBindingBehavior {
    public bind(binding, _scope, callbackFn) {
        binding.originalupdateTarget = binding.updateTarget;

        binding.updateTarget = async a => {
            const d = await a;
            binding.originalupdateTarget(d);

            if (_.isFunction(callbackFn)) {
                _.defer(() => callbackFn());
            }
        };
    }

    public unbind(binding) {
        binding.updateTarget = binding.originalupdateTarget;
        binding.originalupdateTarget = null;
    }
}
