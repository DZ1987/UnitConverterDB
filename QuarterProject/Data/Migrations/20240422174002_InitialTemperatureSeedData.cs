using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace QuarterProject.Data.Migrations
{
    /// <inheritdoc />
    public partial class InitialTemperatureSeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ConvertTemperature",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TemperatureName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TemperatureConversion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TemperatureFormula = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ConvertTemperature", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "ConvertTemperature",
                columns: new[] { "Id", "TemperatureConversion", "TemperatureFormula", "TemperatureName" },
                values: new object[,]
                {
                    { 1, "CelsiusToFahrenheit", "(x * (9/5)) + 32", "Celsius" },
                    { 2, "CelsiusToKelvin", "x + 273.15", "Celsius" },
                    { 3, "FahrenheitToCelsius", "(x - 32) * (5/9)", "Fahrenheit" },
                    { 4, "FahrenheitToKelvin", "(x - 32) * (5/9) + 273.15", "Fahrenheit" },
                    { 5, "KelvinToCelsius", "x - 273.15", "Kelvin" },
                    { 6, "KelvinToFahrenheit", "(x - 273.15) * (9/5) + 32", "Kelvin" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ConvertTemperature");
        }
    }
}
