class Calculator {
    static buttons = document.querySelectorAll(".tecla");
    static display = document.getElementById("display") as HTMLSpanElement;

    static displayValue: string = "0";
    static previousValue: string;
    static operator: string;
    static resultado: number;

    static updateDisplay = () => {
        this.display.textContent = this.displayValue;
    };

    static inputDisplay = (digit: string) => {
        if (this.displayValue.length >= 8) return;
        if (this.displayValue === "0") this.displayValue = "";
        
        this.displayValue += digit;

        this.updateDisplay();
    };

    static clearDisplay = () => {
        this.displayValue = "0";
        this.updateDisplay();
    }

    static executarOperacao= () => {
        switch (this.operator) {
            case "somar":
                this.resultado = parseInt (this.previousValue) + parseInt (this.displayValue);
                this.displayValue = this.resultado.toString()
                this.updateDisplay();
                break;
            case "subtrair":
                this.resultado = parseInt (this.previousValue) - parseInt (this.displayValue);
                this.displayValue = this.resultado.toString()
                this.updateDisplay();
                break;
            case "multiplicar":
                this.resultado = parseInt (this.previousValue) * parseInt (this.displayValue);
                this.displayValue = this.resultado.toString()
                this.updateDisplay();
                break;
            case "dividir":
                if (parseInt (this.displayValue) === 0) return
                this.resultado = parseInt (this.previousValue) / parseInt (this.displayValue);
                this.displayValue = this.resultado.toString()
                this.updateDisplay();
                break;
        }
    }
    static receberOperacao = (operacao: string) => {
        this.previousValue = this.displayValue;
        this.operator = operacao
        this.displayValue = "";
    }
    

    static start = () => {
        this.buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const buttonText = button.getAttribute("id");
                switch (buttonText){
                    case "on":
                        this.clearDisplay();
                        break;
                    case "mais":
                        this.receberOperacao("somar");
                        break;
                    case "igual":
                        this.executarOperacao();
                        break;
                    case "menos":
                        this.receberOperacao("subtrair");
                        break;
                    case "por":
                        this.receberOperacao("multiplicar");
                        break;
                    case "dividido":
                        this.receberOperacao("dividir");
                        break;
                    default: 
                        this.inputDisplay(buttonText!);
                        break;
                }

            });
        });
    };

}

Calculator.start();