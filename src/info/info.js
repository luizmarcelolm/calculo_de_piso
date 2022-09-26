import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className='text-center'>
        <Button color="white" size="sm" onClick={this.toggle} style={{ marginBottom: '1rem' }}>INFORMAÇÕES</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            Para um cálculo de metragem para piso mais preciso, é indicado se basear na planta baixa do empreendimento. Assim, o resultado será obtido por meio da regra:
            M² = base x altura (duas dimensões do piso);
           
            Para exemplificar, a seguir, separei um modelo de cálculo de metragem. Veja só:
           
            Para um piso com medidas de 45 x 45 cm, utilize a mesma unidade de medida, tudo em centímetros ou em metro, convertendo em 0,45m x 0,45 m; Com base na fórmula, consideramos a área a ser instalada o piso de 25m²; 
           
            Para um cálculo tranquilo, é necessário acrescentar 10% sob as medidas da metragem;Coletado todos esses dados, chegamos a fórmula de metragem do piso: 0,205 x 25 = 123, 4567901 + 10%. Dessa forma, o resultado será de 135 unidades de piso para instalação em uma área de 25 m².
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Example;