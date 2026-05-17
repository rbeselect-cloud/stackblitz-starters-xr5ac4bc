function gerarContrato(p) {
  const contrato = `
CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE CONSULTORIA DE CARREIRA

CONTRATANTE: ${p.nome || 'Cliente'}
WHATSAPP: ${p.whatsapp || '-'}
SERVIÇO CONTRATADO: ${p.servico || '-'}
VALOR: R$ ${p.valor || '0,00'}
DATA: ${p.data || '-'}

A RBE Select prestará serviços de consultoria de carreira conforme o serviço contratado pelo cliente.

O prazo médio de entrega será de 5 a 7 dias úteis, contados a partir do envio completo das informações necessárias pelo cliente.

O serviço não garante contratação, convocação para entrevista ou aprovação em processo seletivo.

O cliente declara estar ciente das condições acima.

RBE Select
Consultoria de Carreira
`;

  const janela = window.open('', '_blank');

  janela.document.write(`
    <html>
      <body style="font-family:Arial;padding:40px;line-height:1.6;">
        <h1>Contrato RBE Select</h1>
        <pre style="white-space:pre-wrap;font-family:Arial;">${contrato}</pre>
        <button onclick="window.print()">Baixar / Imprimir PDF</button>
      </body>
    </html>
  `);

  janela.document.close();
}
React.createElement(
  'button',
  {
    onClick: () => gerarContrato(p),
    style: {
      background: '#0F2445',
      color: '#fff',
      border: 'none',
      borderRadius: 8,
      padding: '8px 12px',
      cursor: 'pointer',
      fontWeight: 700
    }
  },
  '📄 Contrato'
),