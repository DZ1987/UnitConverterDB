using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using QuarterProject.Models;

namespace QuarterProject.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<RegisteredUser> RegisteredUser { get; set; }
        public DbSet<ConvertCurrency> ConvertCurrency { get; set; }
        public DbSet<ConvertLength> ConvertLength { get; set; }
        public DbSet<ConvertTemperature> ConvertTemperature { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Calls the OnModelCreating method of the base DbContext class.
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<RegisteredUser>().HasData(
                new RegisteredUser { Id = 1, UserName = "Admin", UserText = "T E S T\r\nS     E\r\nE     S\r\nT S E T" },
                new RegisteredUser { Id = 2, UserName = "Admin", UserText = "TTTTTTTTTT EEEEEEEE SSSSSSSS TTTTTTTTTT\r\n    TT     EE       SS           TT\r\n    TT     EEEEEEE  SSSSSSSS     TT\r\n    TT     EE             SS     TT\r\n    TT     EEEEEEEE SSSSSSSS     TT" },
                new RegisteredUser { Id = 3, UserName = "Admin", UserText = "<tbody>\r\n    @foreach (var item in Model)\r\n    {\r\n        <tr>\r\n            <td class=\"col-1 border-right\">\r\n                <a asp-action=\"Edit\" asp-route-id=\"@item.Id\">Edit</a><br>\r\n                <a asp-action=\"Details\" asp-route-id=\"@item.Id\">Details</a><br>\r\n                <a asp-action=\"Delete\" asp-route-id=\"@item.Id\">Delete</a>\r\n            </td>\r\n            <td>\r\n                <pre>@Html.DisplayFor(modelItem => item.UserText)</pre>\r\n            </td>\r\n        </tr>\r\n    }\r\n</tbody>" }
            );

            modelBuilder.Entity<ConvertLength>().HasData(
                new ConvertLength { Id = 1, LengthName = "Millimeter", LengthConversion = "MillimeterToCentimeter", LengthFormula = "x/10" },
                new ConvertLength { Id = 2, LengthName = "Millimeter", LengthConversion = "MillimeterToMeter", LengthFormula = "x/1000" },
                new ConvertLength { Id = 3, LengthName = "Millimeter", LengthConversion = "MillimeterToKilometer", LengthFormula = "x/1e+6" },
                new ConvertLength { Id = 4, LengthName = "Millimeter", LengthConversion = "MillimeterToInch", LengthFormula = "x/25.4" },
                new ConvertLength { Id = 5, LengthName = "Millimeter", LengthConversion = "MillimeterToFoot", LengthFormula = "x/304.8" },
                new ConvertLength { Id = 6, LengthName = "Millimeter", LengthConversion = "MillimeterToYard", LengthFormula = "x/914.4" },
                new ConvertLength { Id = 7, LengthName = "Millimeter", LengthConversion = "MillimeterToMile", LengthFormula = "x/1.609e+6" },
                new ConvertLength { Id = 8, LengthName = "Centimeter", LengthConversion = "CentimeterToMillimeter", LengthFormula = "x * 10" },
                new ConvertLength { Id = 9, LengthName = "Centimeter", LengthConversion = "CentimeterToMeter", LengthFormula = "x/100" },
                new ConvertLength { Id = 10, LengthName = "Centimeter", LengthConversion = "CentimeterToKilometer", LengthFormula = "x/100000" },
                new ConvertLength { Id = 11, LengthName = "Centimeter", LengthConversion = "CentimeterToInch", LengthFormula = "x/2.54" },
                new ConvertLength { Id = 12, LengthName = "Centimeter", LengthConversion = "CentimeterToFoot", LengthFormula = "x/30.48" },
                new ConvertLength { Id = 13, LengthName = "Centimeter", LengthConversion = "CentimeterToYard", LengthFormula = "x/91.44" },
                new ConvertLength { Id = 14, LengthName = "Centimeter", LengthConversion = "CentimeterToMile", LengthFormula = "x/160900" },
                new ConvertLength { Id = 15, LengthName = "Meter", LengthConversion = "MeterToMillimeter", LengthFormula = "x * 1000" },
                new ConvertLength { Id = 16, LengthName = "Meter", LengthConversion = "MeterToCentimeter", LengthFormula = "x * 100" },
                new ConvertLength { Id = 17, LengthName = "Meter", LengthConversion = "MeterToKilometer", LengthFormula = "x/1000" },
                new ConvertLength { Id = 18, LengthName = "Meter", LengthConversion = "MeterToInch", LengthFormula = "x * 39.37" },
                new ConvertLength { Id = 19, LengthName = "Meter", LengthConversion = "MeterToFoot", LengthFormula = "x * 3.281" },
                new ConvertLength { Id = 20, LengthName = "Meter", LengthConversion = "MeterToYard", LengthFormula = "x * 1.094" },
                new ConvertLength { Id = 21, LengthName = "Meter", LengthConversion = "MeterToMile", LengthFormula = "x/1609" },
                new ConvertLength { Id = 22, LengthName = "Kilometer", LengthConversion = "KilometerToMillimeter", LengthFormula = "x * 1e+6" },
                new ConvertLength { Id = 23, LengthName = "Kilometer", LengthConversion = "KilometerToCentimeter", LengthFormula = "x * 100000" },
                new ConvertLength { Id = 24, LengthName = "Kilometer", LengthConversion = "KilometerToMeter", LengthFormula = "x * 1000" },
                new ConvertLength { Id = 25, LengthName = "Kilometer", LengthConversion = "KilometerToInch", LengthFormula = "x * 39370" },
                new ConvertLength { Id = 26, LengthName = "Kilometer", LengthConversion = "KilometerToFoot", LengthFormula = "x * 3281" },
                new ConvertLength { Id = 27, LengthName = "Kilometer", LengthConversion = "KilometerToYard", LengthFormula = "x * 1094" },
                new ConvertLength { Id = 28, LengthName = "Kilometer", LengthConversion = "KilometerToMile", LengthFormula = "x/1.609" },
                new ConvertLength { Id = 29, LengthName = "Inch", LengthConversion = "InchToMillimeter", LengthFormula = "x * 25.4" },
                new ConvertLength { Id = 30, LengthName = "Inch", LengthConversion = "InchToCentimeter", LengthFormula = "x * 2.54" },
                new ConvertLength { Id = 31, LengthName = "Inch", LengthConversion = "InchToMeter", LengthFormula = "x/39.37" },
                new ConvertLength { Id = 32, LengthName = "Inch", LengthConversion = "InchToKilometer", LengthFormula = "x/39370" },
                new ConvertLength { Id = 33, LengthName = "Inch", LengthConversion = "InchToFoot", LengthFormula = "x/12" },
                new ConvertLength { Id = 34, LengthName = "Inch", LengthConversion = "InchToYard", LengthFormula = "x/36" },
                new ConvertLength { Id = 35, LengthName = "Inch", LengthConversion = "InchToMile", LengthFormula = "x/63360" },
                new ConvertLength { Id = 36, LengthName = "Foot", LengthConversion = "FootToMillimeter", LengthFormula = "x * 304.8" },
                new ConvertLength { Id = 37, LengthName = "Foot", LengthConversion = "FootToCentimeter", LengthFormula = "x * 30.48" },
                new ConvertLength { Id = 38, LengthName = "Foot", LengthConversion = "FootToMeter", LengthFormula = "x/3.281" },
                new ConvertLength { Id = 39, LengthName = "Foot", LengthConversion = "FootToKilometer", LengthFormula = "x/3281" },
                new ConvertLength { Id = 40, LengthName = "Foot", LengthConversion = "FootToInch", LengthFormula = "x * 12" },
                new ConvertLength { Id = 41, LengthName = "Foot", LengthConversion = "FootToYard", LengthFormula = "x/3" },
                new ConvertLength { Id = 42, LengthName = "Foot", LengthConversion = "FootToMile", LengthFormula = "x/5280" },
                new ConvertLength { Id = 43, LengthName = "Yard", LengthConversion = "YardToMillimeter", LengthFormula = "x * 914.4" },
                new ConvertLength { Id = 44, LengthName = "Yard", LengthConversion = "YardToCentimeter", LengthFormula = "x * 91.44" },
                new ConvertLength { Id = 45, LengthName = "Yard", LengthConversion = "YardToMeter", LengthFormula = "x/1.094" },
                new ConvertLength { Id = 46, LengthName = "Yard", LengthConversion = "YardToKilometer", LengthFormula = "x/1094" },
                new ConvertLength { Id = 47, LengthName = "Yard", LengthConversion = "YardToInch", LengthFormula = "x * 36" },
                new ConvertLength { Id = 48, LengthName = "Yard", LengthConversion = "YardToFoot", LengthFormula = "x * 3" },
                new ConvertLength { Id = 49, LengthName = "Yard", LengthConversion = "YardToMile", LengthFormula = "x/1760" },
                new ConvertLength { Id = 50, LengthName = "Mile", LengthConversion = "MileToMillimeter", LengthFormula = "x * 1.609e+6" },
                new ConvertLength { Id = 51, LengthName = "Mile", LengthConversion = "MileToCentimeter", LengthFormula = "x * 160900" },
                new ConvertLength { Id = 52, LengthName = "Mile", LengthConversion = "MileToMeter", LengthFormula = "x * 1609" },
                new ConvertLength { Id = 53, LengthName = "Mile", LengthConversion = "MileToKilometer", LengthFormula = "x * 1.609" },
                new ConvertLength { Id = 54, LengthName = "Mile", LengthConversion = "MileToInch", LengthFormula = "x * 63360" },
                new ConvertLength { Id = 55, LengthName = "Mile", LengthConversion = "MileToFoot", LengthFormula = "x * 5280" },
                new ConvertLength { Id = 56, LengthName = "Mile", LengthConversion = "MileToYard", LengthFormula = "x * 1760" }
            );

            modelBuilder.Entity<ConvertTemperature>().HasData(
                new ConvertTemperature { Id = 1, TemperatureName = "Celsius", TemperatureConversion = "CelsiusToFahrenheit", TemperatureFormula = "(x * (9/5)) + 32" },
                new ConvertTemperature { Id = 2, TemperatureName = "Celsius", TemperatureConversion = "CelsiusToKelvin", TemperatureFormula = "x + 273.15" },
                new ConvertTemperature { Id = 3, TemperatureName = "Fahrenheit", TemperatureConversion = "FahrenheitToCelsius", TemperatureFormula = "(x - 32) * (5/9)" },
                new ConvertTemperature { Id = 4, TemperatureName = "Fahrenheit", TemperatureConversion = "FahrenheitToKelvin", TemperatureFormula = "(x - 32) * (5/9) + 273.15" },
                new ConvertTemperature { Id = 5, TemperatureName = "Kelvin", TemperatureConversion = "KelvinToCelsius", TemperatureFormula = "x - 273.15" },
                new ConvertTemperature { Id = 6, TemperatureName = "Kelvin", TemperatureConversion = "KelvinToFahrenheit", TemperatureFormula = "(x - 273.15) * (9/5) + 32" }
            );
        }
    }
}
