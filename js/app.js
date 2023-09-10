var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    var _a;
    _a = Calculator;
    Calculator.buttons = document.querySelectorAll(".tecla");
    Calculator.display = document.getElementById("display");
    Calculator.displayValue = "0";
    Calculator.updateDisplay = function () {
        _a.display.textContent = _a.displayValue;
    };
    Calculator.inputDisplay = function (digit) {
        if (_a.displayValue.length >= 8)
            return;
        if (_a.displayValue === "0")
            _a.displayValue = "";
        _a.displayValue += digit;
        _a.updateDisplay();
    };
    Calculator.clearDisplay = function () {
        _a.displayValue = "0";
        console.log("chamei o limpa display");
        _a.updateDisplay();
    };
    Calculator.executarOperacao = function () {
        switch (_a.operator) {
            case "somar":
                _a.resultado = parseInt(_a.previousValue) + parseInt(_a.displayValue);
                _a.displayValue = _a.resultado.toString();
                _a.updateDisplay();
                break;
            case "subtrair":
                _a.resultado = parseInt(_a.previousValue) - parseInt(_a.displayValue);
                _a.displayValue = _a.resultado.toString();
                _a.updateDisplay();
                break;
            case "multiplicar":
                _a.resultado = parseInt(_a.previousValue) * parseInt(_a.displayValue);
                _a.displayValue = _a.resultado.toString();
                _a.updateDisplay();
                break;
            case "dividir":
                if (parseInt(_a.displayValue) === 0)
                    return;
                _a.resultado = parseInt(_a.previousValue) / parseInt(_a.displayValue);
                _a.displayValue = _a.resultado.toString();
                _a.updateDisplay();
                break;
        }
    };
    Calculator.receberOperacao = function (operacao) {
        _a.previousValue = _a.displayValue;
        _a.operator = operacao;
        _a.displayValue = "";
    };
    Calculator.start = function () {
        _a.buttons.forEach(function (button) {
            button.addEventListener("click", function () {
                var buttonText = button.getAttribute("id");
                switch (buttonText) {
                    case "on":
                        _a.clearDisplay();
                        break;
                    case "mais":
                        _a.receberOperacao("somar");
                        break;
                    case "igual":
                        _a.executarOperacao();
                        break;
                    case "menos":
                        _a.receberOperacao("subtrair");
                        break;
                    case "por":
                        _a.receberOperacao("multiplicar");
                        break;
                    case "dividido":
                        _a.receberOperacao("dividir");
                        break;
                    default:
                        _a.inputDisplay(buttonText);
                        break;
                }
            });
        });
    };
    return Calculator;
}());
Calculator.start();
