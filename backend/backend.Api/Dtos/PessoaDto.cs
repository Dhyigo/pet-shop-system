using backend.Database.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace backend.Api.Dtos
{
    public class PessoaDto
    {
        public string Nome { get; set; } = string.Empty;

        public string Celular { get; set; } = string.Empty;

        public string Telefone { get; set; } = string.Empty;

        public string CPF { get; set; } = string.Empty;

        public string CNPJ { get; set; } = string.Empty;

        public string Estado { get; set; } = string.Empty;

        public string Municipio { get; set; } = string.Empty;

        public string Bairro { get; set; } = string.Empty;

        public string Endereco { get; set; } = string.Empty;

        public string CEP { get; set; } = string.Empty;
    }
}
