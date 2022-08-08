import React, { Component } from 'react';

class Feedback extends Component {
  mensagens = (pontos) => {
    const acertosMin = 3;
    if (pontos < acertosMin) { return 'Could be better...'; }
    return 'Well Done!';
  };

  render() {
    return (
      <div>
        <p data-testid="feedback-text">
          {this.mensagens()}
        </p>
        <p data-testid="feedback-total-score">
          Placa final
        </p>
        <p data-testid="feedback-total-question">
          Número de perguntas
        </p>
      </div>
    );
  }
}
export default Feedback;
