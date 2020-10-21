System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoDeExecucao() {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                console.log('----------------------');
                console.log(`Parâmetros passados ${propertyKey}: ${JSON.stringify(args)}`);
                const retorno = metodoOriginal.apply(this, args);
                console.log(`O retorno do método ${propertyKey} é ${JSON.stringify(retorno)}`);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoDeExecucao", logarTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
