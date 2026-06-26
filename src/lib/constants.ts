export const serviceTypes = ['colheita','plantio','pulverização','preparo de solo','transporte','ensilagem'];
export const machineTypes = ['colheitadeira','plantadeira','pulverizador','trator','caminhão','ensiladeira','grade/arado','pá carregadeira'];
export const crops = ['soja','milho','sorgo','feijão','algodão','cana','pastagem','silagem'];
export const requestStatuses = ['novo','buscando_prestadores','interessados','orcamento_enviado','em_negociacao','contratado','finalizado','cancelado','perdido'] as const;
export const providerStatuses = ['pending','active','blocked','inactive'] as const;
export const machineStatuses = ['pending','active','unavailable','inactive','blocked'] as const;
export const cities = ['Rio Verde/GO','Jataí/GO','Montividiu/GO','Santa Helena de Goiás/GO','Mineiros/GO','Chapadão do Céu/GO','Quirinópolis/GO','Paraúna/GO','Caiapônia/GO','Santo Antônio da Barra/GO'];
export const statusLabels: Record<string,string> = { novo:'Novo pedido', buscando_prestadores:'Buscando máquina', interessados:'Interessados', orcamento_enviado:'Orçamento enviado', em_negociacao:'Negociação', contratado:'Contratado', finalizado:'Finalizado', cancelado:'Cancelado', perdido:'Perdido', pending:'Pendente', active:'Ativo', blocked:'Bloqueado', inactive:'Inativo', unavailable:'Indisponível', interessado:'Interessado', aguardando_produtor:'Aguardando produtor' };
