﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using UnitConverterDB.Models;

namespace UnitConverterDB.Data
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
                new RegisteredUser { Id = 1, UserName = "Admin", UserTextTitle = "Test Box", UserText = "T E S T\r\nS     E\r\nE     S\r\nT S E T" },
                new RegisteredUser { Id = 2, UserName = "Admin", UserTextTitle = "Test ASCII", UserText = "TTTTTTTTTT EEEEEEEE SSSSSSSS TTTTTTTTTT\r\n    TT     EE       SS           TT\r\n    TT     EEEEEEE  SSSSSSSS     TT\r\n    TT     EE             SS     TT\r\n    TT     EEEEEEEE SSSSSSSS     TT" },
                new RegisteredUser { Id = 3, UserName = "Admin", UserTextTitle = "Foreach Table", UserText = "<tbody>\r\n    @foreach (var item in Model)\r\n    {\r\n        <tr>\r\n            <td class=\"col-1 border-right\">\r\n                <a asp-action=\"Edit\" asp-route-id=\"@item.Id\">Edit</a><br>\r\n                <a asp-action=\"Details\" asp-route-id=\"@item.Id\">Details</a><br>\r\n                <a asp-action=\"Delete\" asp-route-id=\"@item.Id\">Delete</a>\r\n            </td>\r\n            <td>\r\n                <pre>@Html.DisplayFor(modelItem => item.UserText)</pre>\r\n            </td>\r\n        </tr>\r\n    }\r\n</tbody>" }
            );

            modelBuilder.Entity<ConvertCurrency>().HasData(
                new ConvertCurrency { CurrencyCode = "AED", CurrencyName = "UAE Dirham" },
                new ConvertCurrency { CurrencyCode = "AFN", CurrencyName = "Afghan Afghani" },
                new ConvertCurrency { CurrencyCode = "ALL", CurrencyName = "Albanian Lek" },
                new ConvertCurrency { CurrencyCode = "AMD", CurrencyName = "Armenian Dram" },
                new ConvertCurrency { CurrencyCode = "ANG", CurrencyName = "Netherlands Antillian Guilder" },
                new ConvertCurrency { CurrencyCode = "AOA", CurrencyName = "Angolan Kwanza" },
                new ConvertCurrency { CurrencyCode = "ARS", CurrencyName = "Argentine Peso" },
                new ConvertCurrency { CurrencyCode = "AUD", CurrencyName = "Australian Dollar" },
                new ConvertCurrency { CurrencyCode = "AWG", CurrencyName = "Aruban Florin" },
                new ConvertCurrency { CurrencyCode = "AZN", CurrencyName = "Azerbaijani Manat" },
                new ConvertCurrency { CurrencyCode = "BAM", CurrencyName = "Bosnia and Herzegovina Mark" },
                new ConvertCurrency { CurrencyCode = "BBD", CurrencyName = "Barbados Dollar" },
                new ConvertCurrency { CurrencyCode = "BDT", CurrencyName = "Bangladeshi Taka" },
                new ConvertCurrency { CurrencyCode = "BGN", CurrencyName = "Bulgarian Lev" },
                new ConvertCurrency { CurrencyCode = "BHD", CurrencyName = "Bahraini Dinar" },
                new ConvertCurrency { CurrencyCode = "BIF", CurrencyName = "Burundian Franc" },
                new ConvertCurrency { CurrencyCode = "BMD", CurrencyName = "Bermudian Dollar" },
                new ConvertCurrency { CurrencyCode = "BND", CurrencyName = "Brunei Dollar" },
                new ConvertCurrency { CurrencyCode = "BOB", CurrencyName = "Bolivian Boliviano" },
                new ConvertCurrency { CurrencyCode = "BRL", CurrencyName = "Brazilian Real" },
                new ConvertCurrency { CurrencyCode = "BSD", CurrencyName = "Bahamian Dollar" },
                new ConvertCurrency { CurrencyCode = "BTN", CurrencyName = "Bhutanese Ngultrum" },
                new ConvertCurrency { CurrencyCode = "BWP", CurrencyName = "Botswana Pula" },
                new ConvertCurrency { CurrencyCode = "BYN", CurrencyName = "Belarusian Ruble" },
                new ConvertCurrency { CurrencyCode = "BZD", CurrencyName = "Belize Dollar" },
                new ConvertCurrency { CurrencyCode = "CAD", CurrencyName = "Canadian Dollar" },
                new ConvertCurrency { CurrencyCode = "CDF", CurrencyName = "Congolese Franc" },
                new ConvertCurrency { CurrencyCode = "CHF", CurrencyName = "Swiss Franc" },
                new ConvertCurrency { CurrencyCode = "CLP", CurrencyName = "Chilean Peso" },
                new ConvertCurrency { CurrencyCode = "CNY", CurrencyName = "Chinese Renminbi" },
                new ConvertCurrency { CurrencyCode = "COP", CurrencyName = "Colombian Peso" },
                new ConvertCurrency { CurrencyCode = "CRC", CurrencyName = "Costa Rican Colon" },
                new ConvertCurrency { CurrencyCode = "CUP", CurrencyName = "Cuban Peso" },
                new ConvertCurrency { CurrencyCode = "CVE", CurrencyName = "Cape Verdean Escudo" },
                new ConvertCurrency { CurrencyCode = "CZK", CurrencyName = "Czech Koruna" },
                new ConvertCurrency { CurrencyCode = "DJF", CurrencyName = "Djiboutian Franc" },
                new ConvertCurrency { CurrencyCode = "DKK", CurrencyName = "Danish Krone" },
                new ConvertCurrency { CurrencyCode = "DOP", CurrencyName = "Dominican Peso" },
                new ConvertCurrency { CurrencyCode = "DZD", CurrencyName = "Algerian Dinar" },
                new ConvertCurrency { CurrencyCode = "EGP", CurrencyName = "Egyptian Pound" },
                new ConvertCurrency { CurrencyCode = "ERN", CurrencyName = "Eritrean Nakfa" },
                new ConvertCurrency { CurrencyCode = "ETB", CurrencyName = "Ethiopian Birr" },
                new ConvertCurrency { CurrencyCode = "EUR", CurrencyName = "Euro" },
                new ConvertCurrency { CurrencyCode = "FJD", CurrencyName = "Fiji Dollar" },
                new ConvertCurrency { CurrencyCode = "FKP", CurrencyName = "Falkland Islands Pound" },
                new ConvertCurrency { CurrencyCode = "FOK", CurrencyName = "Faroese Króna" },
                new ConvertCurrency { CurrencyCode = "GBP", CurrencyName = "Pound Sterling" },
                new ConvertCurrency { CurrencyCode = "GEL", CurrencyName = "Georgian Lari" },
                new ConvertCurrency { CurrencyCode = "GGP", CurrencyName = "Guernsey Pound" },
                new ConvertCurrency { CurrencyCode = "GHS", CurrencyName = "Ghanaian Cedi" },
                new ConvertCurrency { CurrencyCode = "GIP", CurrencyName = "Gibraltar Pound" },
                new ConvertCurrency { CurrencyCode = "GMD", CurrencyName = "Gambian Dalasi" },
                new ConvertCurrency { CurrencyCode = "GNF", CurrencyName = "Guinean Franc" },
                new ConvertCurrency { CurrencyCode = "GTQ", CurrencyName = "Guatemalan Quetzal" },
                new ConvertCurrency { CurrencyCode = "GYD", CurrencyName = "Guyanese Dollar" },
                new ConvertCurrency { CurrencyCode = "HKD", CurrencyName = "Hong Kong Dollar" },
                new ConvertCurrency { CurrencyCode = "HNL", CurrencyName = "Honduran Lempira" },
                new ConvertCurrency { CurrencyCode = "HRK", CurrencyName = "Croatian Kuna" },
                new ConvertCurrency { CurrencyCode = "HTG", CurrencyName = "Haitian Gourde" },
                new ConvertCurrency { CurrencyCode = "HUF", CurrencyName = "Hungarian Forint" },
                new ConvertCurrency { CurrencyCode = "IDR", CurrencyName = "Indonesian Rupiah" },
                new ConvertCurrency { CurrencyCode = "ILS", CurrencyName = "Israeli New Shekel" },
                new ConvertCurrency { CurrencyCode = "IMP", CurrencyName = "Manx Pound" },
                new ConvertCurrency { CurrencyCode = "INR", CurrencyName = "Indian Rupee" },
                new ConvertCurrency { CurrencyCode = "IQD", CurrencyName = "Iraqi Dinar" },
                new ConvertCurrency { CurrencyCode = "IRR", CurrencyName = "Iranian Rial" },
                new ConvertCurrency { CurrencyCode = "ISK", CurrencyName = "Icelandic Króna" },
                new ConvertCurrency { CurrencyCode = "JEP", CurrencyName = "Jersey Pound" },
                new ConvertCurrency { CurrencyCode = "JMD", CurrencyName = "Jamaican Dollar" },
                new ConvertCurrency { CurrencyCode = "JOD", CurrencyName = "Jordanian Dinar" },
                new ConvertCurrency { CurrencyCode = "JPY", CurrencyName = "Japanese Yen" },
                new ConvertCurrency { CurrencyCode = "KES", CurrencyName = "Kenyan Shilling" },
                new ConvertCurrency { CurrencyCode = "KGS", CurrencyName = "Kyrgyzstani Som" },
                new ConvertCurrency { CurrencyCode = "KHR", CurrencyName = "Cambodian Riel" },
                new ConvertCurrency { CurrencyCode = "KID", CurrencyName = "Kiribati Dollar" },
                new ConvertCurrency { CurrencyCode = "KMF", CurrencyName = "Comorian Franc" },
                new ConvertCurrency { CurrencyCode = "KRW", CurrencyName = "South Korean Won" },
                new ConvertCurrency { CurrencyCode = "KWD", CurrencyName = "Kuwaiti Dinar" },
                new ConvertCurrency { CurrencyCode = "KYD", CurrencyName = "Cayman Islands Dollar" },
                new ConvertCurrency { CurrencyCode = "KZT", CurrencyName = "Kazakhstani Tenge" },
                new ConvertCurrency { CurrencyCode = "LAK", CurrencyName = "Lao Kip" },
                new ConvertCurrency { CurrencyCode = "LBP", CurrencyName = "Lebanese Pound" },
                new ConvertCurrency { CurrencyCode = "LKR", CurrencyName = "Sri Lanka Rupee" },
                new ConvertCurrency { CurrencyCode = "LRD", CurrencyName = "Liberian Dollar" },
                new ConvertCurrency { CurrencyCode = "LSL", CurrencyName = "Lesotho Loti" },
                new ConvertCurrency { CurrencyCode = "LYD", CurrencyName = "Libyan Dinar" },
                new ConvertCurrency { CurrencyCode = "MAD", CurrencyName = "Moroccan Dirham" },
                new ConvertCurrency { CurrencyCode = "MDL", CurrencyName = "Moldovan Leu" },
                new ConvertCurrency { CurrencyCode = "MGA", CurrencyName = "Malagasy Ariary" },
                new ConvertCurrency { CurrencyCode = "MKD", CurrencyName = "Macedonian Denar" },
                new ConvertCurrency { CurrencyCode = "MMK", CurrencyName = "Burmese Kyat" },
                new ConvertCurrency { CurrencyCode = "MNT", CurrencyName = "Mongolian Tögrög" },
                new ConvertCurrency { CurrencyCode = "MOP", CurrencyName = "Macanese Pataca" },
                new ConvertCurrency { CurrencyCode = "MRU", CurrencyName = "Mauritanian Ouguiya" },
                new ConvertCurrency { CurrencyCode = "MUR", CurrencyName = "Mauritian Rupee" },
                new ConvertCurrency { CurrencyCode = "MVR", CurrencyName = "Maldivian Rufiyaa" },
                new ConvertCurrency { CurrencyCode = "MWK", CurrencyName = "Malawian Kwacha" },
                new ConvertCurrency { CurrencyCode = "MXN", CurrencyName = "Mexican Peso" },
                new ConvertCurrency { CurrencyCode = "MYR", CurrencyName = "Malaysian Ringgit" },
                new ConvertCurrency { CurrencyCode = "MZN", CurrencyName = "Mozambican Metical" },
                new ConvertCurrency { CurrencyCode = "NAD", CurrencyName = "Namibian Dollar" },
                new ConvertCurrency { CurrencyCode = "NGN", CurrencyName = "Nigerian Naira" },
                new ConvertCurrency { CurrencyCode = "NIO", CurrencyName = "Nicaraguan Córdoba" },
                new ConvertCurrency { CurrencyCode = "NOK", CurrencyName = "Norwegian Krone" },
                new ConvertCurrency { CurrencyCode = "NPR", CurrencyName = "Nepalese Rupee" },
                new ConvertCurrency { CurrencyCode = "NZD", CurrencyName = "New Zealand Dollar" },
                new ConvertCurrency { CurrencyCode = "OMR", CurrencyName = "Omani Rial" },
                new ConvertCurrency { CurrencyCode = "PAB", CurrencyName = "Panamanian Balboa" },
                new ConvertCurrency { CurrencyCode = "PEN", CurrencyName = "Peruvian Sol" },
                new ConvertCurrency { CurrencyCode = "PGK", CurrencyName = "Papua New Guinean Kina" },
                new ConvertCurrency { CurrencyCode = "PHP", CurrencyName = "Philippine Peso" },
                new ConvertCurrency { CurrencyCode = "PKR", CurrencyName = "Pakistani Rupee" },
                new ConvertCurrency { CurrencyCode = "PLN", CurrencyName = "Polish Złoty" },
                new ConvertCurrency { CurrencyCode = "PYG", CurrencyName = "Paraguayan Guaraní" },
                new ConvertCurrency { CurrencyCode = "QAR", CurrencyName = "Qatari Riyal" },
                new ConvertCurrency { CurrencyCode = "RON", CurrencyName = "Romanian Leu" },
                new ConvertCurrency { CurrencyCode = "RSD", CurrencyName = "Serbian Dinar" },
                new ConvertCurrency { CurrencyCode = "RUB", CurrencyName = "Russian Ruble" },
                new ConvertCurrency { CurrencyCode = "RWF", CurrencyName = "Rwandan Franc" },
                new ConvertCurrency { CurrencyCode = "SAR", CurrencyName = "Saudi Riyal" },
                new ConvertCurrency { CurrencyCode = "SBD", CurrencyName = "Solomon Islands Dollar" },
                new ConvertCurrency { CurrencyCode = "SCR", CurrencyName = "Seychellois Rupee" },
                new ConvertCurrency { CurrencyCode = "SDG", CurrencyName = "Sudanese Pound" },
                new ConvertCurrency { CurrencyCode = "SEK", CurrencyName = "Swedish Krona" },
                new ConvertCurrency { CurrencyCode = "SGD", CurrencyName = "Singapore Dollar" },
                new ConvertCurrency { CurrencyCode = "SHP", CurrencyName = "Saint Helena Pound" },
                new ConvertCurrency { CurrencyCode = "SLE", CurrencyName = "Sierra Leonean Leone" },
                new ConvertCurrency { CurrencyCode = "SOS", CurrencyName = "Somali Shilling" },
                new ConvertCurrency { CurrencyCode = "SRD", CurrencyName = "Surinamese Dollar" },
                new ConvertCurrency { CurrencyCode = "SSP", CurrencyName = "South Sudanese Pound" },
                new ConvertCurrency { CurrencyCode = "STN", CurrencyName = "São Tomé and Príncipe Dobra" },
                new ConvertCurrency { CurrencyCode = "SYP", CurrencyName = "Syrian Pound" },
                new ConvertCurrency { CurrencyCode = "SZL", CurrencyName = "Eswatini Lilangeni" },
                new ConvertCurrency { CurrencyCode = "THB", CurrencyName = "Thai Baht" },
                new ConvertCurrency { CurrencyCode = "TJS", CurrencyName = "Tajikistani Somoni" },
                new ConvertCurrency { CurrencyCode = "TMT", CurrencyName = "Turkmenistan Manat" },
                new ConvertCurrency { CurrencyCode = "TND", CurrencyName = "Tunisian Dinar" },
                new ConvertCurrency { CurrencyCode = "TOP", CurrencyName = "Tongan Paʻanga" },
                new ConvertCurrency { CurrencyCode = "TRY", CurrencyName = "Turkish Lira" },
                new ConvertCurrency { CurrencyCode = "TTD", CurrencyName = "Trinidad and Tobago Dollar" },
                new ConvertCurrency { CurrencyCode = "TVD", CurrencyName = "Tuvaluan Dollar" },
                new ConvertCurrency { CurrencyCode = "TWD", CurrencyName = "New Taiwan Dollar" },
                new ConvertCurrency { CurrencyCode = "TZS", CurrencyName = "Tanzanian Shilling" },
                new ConvertCurrency { CurrencyCode = "UAH", CurrencyName = "Ukrainian Hryvnia" },
                new ConvertCurrency { CurrencyCode = "UGX", CurrencyName = "Ugandan Shilling" },
                new ConvertCurrency { CurrencyCode = "USD", CurrencyName = "United States Dollar" },
                new ConvertCurrency { CurrencyCode = "UYU", CurrencyName = "Uruguayan Peso" },
                new ConvertCurrency { CurrencyCode = "UZS", CurrencyName = "Uzbekistani So'm" },
                new ConvertCurrency { CurrencyCode = "VES", CurrencyName = "Venezuelan Bolívar Soberano" },
                new ConvertCurrency { CurrencyCode = "VND", CurrencyName = "Vietnamese Đồng" },
                new ConvertCurrency { CurrencyCode = "VUV", CurrencyName = "Vanuatu Vatu" },
                new ConvertCurrency { CurrencyCode = "WST", CurrencyName = "Samoan Tālā" },
                new ConvertCurrency { CurrencyCode = "XAF", CurrencyName = "Central African CFA Franc" },
                new ConvertCurrency { CurrencyCode = "XCD", CurrencyName = "East Caribbean Dollar" },
                new ConvertCurrency { CurrencyCode = "XDR", CurrencyName = "Special Drawing Rights" },
                new ConvertCurrency { CurrencyCode = "XOF", CurrencyName = "West African CFA franc" },
                new ConvertCurrency { CurrencyCode = "XPF", CurrencyName = "CFP Franc" },
                new ConvertCurrency { CurrencyCode = "YER", CurrencyName = "Yemeni Rial" },
                new ConvertCurrency { CurrencyCode = "ZAR", CurrencyName = "South African Rand" },
                new ConvertCurrency { CurrencyCode = "ZMW", CurrencyName = "Zambian Kwacha" },
                new ConvertCurrency { CurrencyCode = "ZWL", CurrencyName = "Zimbabwean Dollar" }
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
