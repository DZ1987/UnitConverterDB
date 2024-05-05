using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace QuarterProject.Data.Migrations
{
    /// <inheritdoc />
    public partial class InitialLengthSeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ConvertLength",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LengthName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LengthConversion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LengthFormula = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ConvertLength", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "ConvertLength",
                columns: new[] { "Id", "LengthConversion", "LengthFormula", "LengthName" },
                values: new object[,]
                {
                    { 1, "MillimeterToCentimeter", "x/10", "Millimeter" },
                    { 2, "MillimeterToMeter", "x/1000", "Millimeter" },
                    { 3, "MillimeterToKilometer", "x/1e+6", "Millimeter" },
                    { 4, "MillimeterToInch", "x/25.4", "Millimeter" },
                    { 5, "MillimeterToFoot", "x/304.8", "Millimeter" },
                    { 6, "MillimeterToYard", "x/914.4", "Millimeter" },
                    { 7, "MillimeterToMile", "x/1.609e+6", "Millimeter" },
                    { 8, "CentimeterToMillimeter", "x * 10", "Centimeter" },
                    { 9, "CentimeterToMeter", "x/100", "Centimeter" },
                    { 10, "CentimeterToKilometer", "x/100000", "Centimeter" },
                    { 11, "CentimeterToInch", "x/2.54", "Centimeter" },
                    { 12, "CentimeterToFoot", "x/30.48", "Centimeter" },
                    { 13, "CentimeterToYard", "x/91.44", "Centimeter" },
                    { 14, "CentimeterToMile", "x/160900", "Centimeter" },
                    { 15, "MeterToMillimeter", "x * 1000", "Meter" },
                    { 16, "MeterToCentimeter", "x * 100", "Meter" },
                    { 17, "MeterToKilometer", "x/1000", "Meter" },
                    { 18, "MeterToInch", "x * 39.37", "Meter" },
                    { 19, "MeterToFoot", "x * 3.281", "Meter" },
                    { 20, "MeterToYard", "x * 1.094", "Meter" },
                    { 21, "MeterToMile", "x/1609", "Meter" },
                    { 22, "KilometerToMillimeter", "x * 1e+6", "Kilometer" },
                    { 23, "KilometerToCentimeter", "x * 100000", "Kilometer" },
                    { 24, "KilometerToMeter", "x * 1000", "Kilometer" },
                    { 25, "KilometerToInch", "x * 39370", "Kilometer" },
                    { 26, "KilometerToFoot", "x * 3281", "Kilometer" },
                    { 27, "KilometerToYard", "x * 1094", "Kilometer" },
                    { 28, "KilometerToMile", "x/1.609", "Kilometer" },
                    { 29, "InchToMillimeter", "x * 25.4", "Inch" },
                    { 30, "InchToCentimeter", "x * 2.54", "Inch" },
                    { 31, "InchToMeter", "x/39.37", "Inch" },
                    { 32, "InchToKilometer", "x/39370", "Inch" },
                    { 33, "InchToFoot", "x/12", "Inch" },
                    { 34, "InchToYard", "x/36", "Inch" },
                    { 35, "InchToMile", "x/63360", "Inch" },
                    { 36, "FootToMillimeter", "x * 304.8", "Foot" },
                    { 37, "FootToCentimeter", "x * 30.48", "Foot" },
                    { 38, "FootToMeter", "x/3.281", "Foot" },
                    { 39, "FootToKilometer", "x/3281", "Foot" },
                    { 40, "FootToInch", "x * 12", "Foot" },
                    { 41, "FootToYard", "x/3", "Foot" },
                    { 42, "FootToMile", "x/5280", "Foot" },
                    { 43, "YardToMillimeter", "x * 914.4", "Yard" },
                    { 44, "YardToCentimeter", "x * 91.44", "Yard" },
                    { 45, "YardToMeter", "x/1.094", "Yard" },
                    { 46, "YardToKilometer", "x/1094", "Yard" },
                    { 47, "YardToInch", "x * 36", "Yard" },
                    { 48, "YardToFoot", "x * 3", "Yard" },
                    { 49, "YardToMile", "x/1760", "Yard" },
                    { 50, "MileToMillimeter", "x * 1.609e+6", "Mile" },
                    { 51, "MileToCentimeter", "x * 160900", "Mile" },
                    { 52, "MileToMeter", "x * 1609", "Mile" },
                    { 53, "MileToKilometer", "x * 1.609", "Mile" },
                    { 54, "MileToInch", "x * 63360", "Mile" },
                    { 55, "MileToFoot", "x * 5280", "Mile" },
                    { 56, "MileToYard", "x * 1760", "Mile" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ConvertLength");
        }
    }
}
