using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Database.Migrations
{
    /// <inheritdoc />
    public partial class add_agendamentos_servicos : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Agendamento",
                columns: table => new
                {
                    CodAgendamento = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    CodCliente = table.Column<int>(type: "INTEGER", nullable: false),
                    CodEmpresa = table.Column<int>(type: "INTEGER", nullable: false),
                    Total = table.Column<double>(type: "REAL", nullable: false),
                    DataInicio = table.Column<DateTime>(type: "TEXT", nullable: false),
                    DataFim = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Agendamento", x => x.CodAgendamento);
                });

            migrationBuilder.CreateTable(
                name: "Servico",
                columns: table => new
                {
                    CodServico = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Titulo = table.Column<string>(type: "TEXT", nullable: false),
                    Descricao = table.Column<string>(type: "TEXT", nullable: false),
                    Valor = table.Column<double>(type: "REAL", nullable: false),
                    AgendamentoCodAgendamento = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Servico", x => x.CodServico);
                    table.ForeignKey(
                        name: "FK_Servico_Agendamento_AgendamentoCodAgendamento",
                        column: x => x.AgendamentoCodAgendamento,
                        principalTable: "Agendamento",
                        principalColumn: "CodAgendamento");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Servico_AgendamentoCodAgendamento",
                table: "Servico",
                column: "AgendamentoCodAgendamento");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Servico");

            migrationBuilder.DropTable(
                name: "Agendamento");
        }
    }
}
