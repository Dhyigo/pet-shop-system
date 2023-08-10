using System.ComponentModel.DataAnnotations;


namespace backend.Api.Dtos
{
    public class AgendamentoDto
    {
        [Required]
        public int CodCliente { get; set; }

        [Required]
        public int CodEmpresa { get; set; }

        public double Total { get; set; }

        [Required]
        public DateTime DataInicio { get; set; } = new DateTime();

        [Required]
        public DateTime DataFim { get; set; } = new DateTime();

    }
}
