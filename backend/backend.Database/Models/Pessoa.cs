using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Database.Models
{
    public class Pessoa
    {
        [Key]
        public int CodPessoa { get; set; }

        [ForeignKey("CodUsuario")]
        public int CodUsuario { get; set; }

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
