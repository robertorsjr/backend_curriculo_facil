export interface BasicCurriculum {
  id: number;
  nome: string;
  data_nascimento: string;
  cep: number;
  logradouro: string;
  bairro: string;
  cidade: string;
  uf: string;
  complemento: string | number;
  email: string;
  telefone: string;
  experiencia: string;
}