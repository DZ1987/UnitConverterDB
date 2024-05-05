﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using QuarterProject.Data;

#nullable disable

namespace QuarterProject.Data.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20240504174228_InitialLengthSeedData")]
    partial class InitialLengthSeedData
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasMaxLength(128)
                        .HasColumnType("nvarchar(128)");

                    b.Property<string>("ProviderKey")
                        .HasMaxLength(128)
                        .HasColumnType("nvarchar(128)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RoleId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LoginProvider")
                        .HasMaxLength(128)
                        .HasColumnType("nvarchar(128)");

                    b.Property<string>("Name")
                        .HasMaxLength(128)
                        .HasColumnType("nvarchar(128)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("QuarterProject.Models.ConvertLength", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("LengthConversion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LengthFormula")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LengthName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("ConvertLength");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            LengthConversion = "MillimeterToCentimeter",
                            LengthFormula = "x/10",
                            LengthName = "Millimeter"
                        },
                        new
                        {
                            Id = 2,
                            LengthConversion = "MillimeterToMeter",
                            LengthFormula = "x/1000",
                            LengthName = "Millimeter"
                        },
                        new
                        {
                            Id = 3,
                            LengthConversion = "MillimeterToKilometer",
                            LengthFormula = "x/1e+6",
                            LengthName = "Millimeter"
                        },
                        new
                        {
                            Id = 4,
                            LengthConversion = "MillimeterToInch",
                            LengthFormula = "x/25.4",
                            LengthName = "Millimeter"
                        },
                        new
                        {
                            Id = 5,
                            LengthConversion = "MillimeterToFoot",
                            LengthFormula = "x/304.8",
                            LengthName = "Millimeter"
                        },
                        new
                        {
                            Id = 6,
                            LengthConversion = "MillimeterToYard",
                            LengthFormula = "x/914.4",
                            LengthName = "Millimeter"
                        },
                        new
                        {
                            Id = 7,
                            LengthConversion = "MillimeterToMile",
                            LengthFormula = "x/1.609e+6",
                            LengthName = "Millimeter"
                        },
                        new
                        {
                            Id = 8,
                            LengthConversion = "CentimeterToMillimeter",
                            LengthFormula = "x * 10",
                            LengthName = "Centimeter"
                        },
                        new
                        {
                            Id = 9,
                            LengthConversion = "CentimeterToMeter",
                            LengthFormula = "x/100",
                            LengthName = "Centimeter"
                        },
                        new
                        {
                            Id = 10,
                            LengthConversion = "CentimeterToKilometer",
                            LengthFormula = "x/100000",
                            LengthName = "Centimeter"
                        },
                        new
                        {
                            Id = 11,
                            LengthConversion = "CentimeterToInch",
                            LengthFormula = "x/2.54",
                            LengthName = "Centimeter"
                        },
                        new
                        {
                            Id = 12,
                            LengthConversion = "CentimeterToFoot",
                            LengthFormula = "x/30.48",
                            LengthName = "Centimeter"
                        },
                        new
                        {
                            Id = 13,
                            LengthConversion = "CentimeterToYard",
                            LengthFormula = "x/91.44",
                            LengthName = "Centimeter"
                        },
                        new
                        {
                            Id = 14,
                            LengthConversion = "CentimeterToMile",
                            LengthFormula = "x/160900",
                            LengthName = "Centimeter"
                        },
                        new
                        {
                            Id = 15,
                            LengthConversion = "MeterToMillimeter",
                            LengthFormula = "x * 1000",
                            LengthName = "Meter"
                        },
                        new
                        {
                            Id = 16,
                            LengthConversion = "MeterToCentimeter",
                            LengthFormula = "x * 100",
                            LengthName = "Meter"
                        },
                        new
                        {
                            Id = 17,
                            LengthConversion = "MeterToKilometer",
                            LengthFormula = "x/1000",
                            LengthName = "Meter"
                        },
                        new
                        {
                            Id = 18,
                            LengthConversion = "MeterToInch",
                            LengthFormula = "x * 39.37",
                            LengthName = "Meter"
                        },
                        new
                        {
                            Id = 19,
                            LengthConversion = "MeterToFoot",
                            LengthFormula = "x * 3.281",
                            LengthName = "Meter"
                        },
                        new
                        {
                            Id = 20,
                            LengthConversion = "MeterToYard",
                            LengthFormula = "x * 1.094",
                            LengthName = "Meter"
                        },
                        new
                        {
                            Id = 21,
                            LengthConversion = "MeterToMile",
                            LengthFormula = "x/1609",
                            LengthName = "Meter"
                        },
                        new
                        {
                            Id = 22,
                            LengthConversion = "KilometerToMillimeter",
                            LengthFormula = "x * 1e+6",
                            LengthName = "Kilometer"
                        },
                        new
                        {
                            Id = 23,
                            LengthConversion = "KilometerToCentimeter",
                            LengthFormula = "x * 100000",
                            LengthName = "Kilometer"
                        },
                        new
                        {
                            Id = 24,
                            LengthConversion = "KilometerToMeter",
                            LengthFormula = "x * 1000",
                            LengthName = "Kilometer"
                        },
                        new
                        {
                            Id = 25,
                            LengthConversion = "KilometerToInch",
                            LengthFormula = "x * 39370",
                            LengthName = "Kilometer"
                        },
                        new
                        {
                            Id = 26,
                            LengthConversion = "KilometerToFoot",
                            LengthFormula = "x * 3281",
                            LengthName = "Kilometer"
                        },
                        new
                        {
                            Id = 27,
                            LengthConversion = "KilometerToYard",
                            LengthFormula = "x * 1094",
                            LengthName = "Kilometer"
                        },
                        new
                        {
                            Id = 28,
                            LengthConversion = "KilometerToMile",
                            LengthFormula = "x/1.609",
                            LengthName = "Kilometer"
                        },
                        new
                        {
                            Id = 29,
                            LengthConversion = "InchToMillimeter",
                            LengthFormula = "x * 25.4",
                            LengthName = "Inch"
                        },
                        new
                        {
                            Id = 30,
                            LengthConversion = "InchToCentimeter",
                            LengthFormula = "x * 2.54",
                            LengthName = "Inch"
                        },
                        new
                        {
                            Id = 31,
                            LengthConversion = "InchToMeter",
                            LengthFormula = "x/39.37",
                            LengthName = "Inch"
                        },
                        new
                        {
                            Id = 32,
                            LengthConversion = "InchToKilometer",
                            LengthFormula = "x/39370",
                            LengthName = "Inch"
                        },
                        new
                        {
                            Id = 33,
                            LengthConversion = "InchToFoot",
                            LengthFormula = "x/12",
                            LengthName = "Inch"
                        },
                        new
                        {
                            Id = 34,
                            LengthConversion = "InchToYard",
                            LengthFormula = "x/36",
                            LengthName = "Inch"
                        },
                        new
                        {
                            Id = 35,
                            LengthConversion = "InchToMile",
                            LengthFormula = "x/63360",
                            LengthName = "Inch"
                        },
                        new
                        {
                            Id = 36,
                            LengthConversion = "FootToMillimeter",
                            LengthFormula = "x * 304.8",
                            LengthName = "Foot"
                        },
                        new
                        {
                            Id = 37,
                            LengthConversion = "FootToCentimeter",
                            LengthFormula = "x * 30.48",
                            LengthName = "Foot"
                        },
                        new
                        {
                            Id = 38,
                            LengthConversion = "FootToMeter",
                            LengthFormula = "x/3.281",
                            LengthName = "Foot"
                        },
                        new
                        {
                            Id = 39,
                            LengthConversion = "FootToKilometer",
                            LengthFormula = "x/3281",
                            LengthName = "Foot"
                        },
                        new
                        {
                            Id = 40,
                            LengthConversion = "FootToInch",
                            LengthFormula = "x * 12",
                            LengthName = "Foot"
                        },
                        new
                        {
                            Id = 41,
                            LengthConversion = "FootToYard",
                            LengthFormula = "x/3",
                            LengthName = "Foot"
                        },
                        new
                        {
                            Id = 42,
                            LengthConversion = "FootToMile",
                            LengthFormula = "x/5280",
                            LengthName = "Foot"
                        },
                        new
                        {
                            Id = 43,
                            LengthConversion = "YardToMillimeter",
                            LengthFormula = "x * 914.4",
                            LengthName = "Yard"
                        },
                        new
                        {
                            Id = 44,
                            LengthConversion = "YardToCentimeter",
                            LengthFormula = "x * 91.44",
                            LengthName = "Yard"
                        },
                        new
                        {
                            Id = 45,
                            LengthConversion = "YardToMeter",
                            LengthFormula = "x/1.094",
                            LengthName = "Yard"
                        },
                        new
                        {
                            Id = 46,
                            LengthConversion = "YardToKilometer",
                            LengthFormula = "x/1094",
                            LengthName = "Yard"
                        },
                        new
                        {
                            Id = 47,
                            LengthConversion = "YardToInch",
                            LengthFormula = "x * 36",
                            LengthName = "Yard"
                        },
                        new
                        {
                            Id = 48,
                            LengthConversion = "YardToFoot",
                            LengthFormula = "x * 3",
                            LengthName = "Yard"
                        },
                        new
                        {
                            Id = 49,
                            LengthConversion = "YardToMile",
                            LengthFormula = "x/1760",
                            LengthName = "Yard"
                        },
                        new
                        {
                            Id = 50,
                            LengthConversion = "MileToMillimeter",
                            LengthFormula = "x * 1.609e+6",
                            LengthName = "Mile"
                        },
                        new
                        {
                            Id = 51,
                            LengthConversion = "MileToCentimeter",
                            LengthFormula = "x * 160900",
                            LengthName = "Mile"
                        },
                        new
                        {
                            Id = 52,
                            LengthConversion = "MileToMeter",
                            LengthFormula = "x * 1609",
                            LengthName = "Mile"
                        },
                        new
                        {
                            Id = 53,
                            LengthConversion = "MileToKilometer",
                            LengthFormula = "x * 1.609",
                            LengthName = "Mile"
                        },
                        new
                        {
                            Id = 54,
                            LengthConversion = "MileToInch",
                            LengthFormula = "x * 63360",
                            LengthName = "Mile"
                        },
                        new
                        {
                            Id = 55,
                            LengthConversion = "MileToFoot",
                            LengthFormula = "x * 5280",
                            LengthName = "Mile"
                        },
                        new
                        {
                            Id = 56,
                            LengthConversion = "MileToYard",
                            LengthFormula = "x * 1760",
                            LengthName = "Mile"
                        });
                });

            modelBuilder.Entity("QuarterProject.Models.ConvertTemperature", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("TemperatureConversion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TemperatureFormula")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TemperatureName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("ConvertTemperature");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            TemperatureConversion = "CelsiusToFahrenheit",
                            TemperatureFormula = "(x * (9/5)) + 32",
                            TemperatureName = "Celsius"
                        },
                        new
                        {
                            Id = 2,
                            TemperatureConversion = "CelsiusToKelvin",
                            TemperatureFormula = "x + 273.15",
                            TemperatureName = "Celsius"
                        },
                        new
                        {
                            Id = 3,
                            TemperatureConversion = "FahrenheitToCelsius",
                            TemperatureFormula = "(x - 32) * (5/9)",
                            TemperatureName = "Fahrenheit"
                        },
                        new
                        {
                            Id = 4,
                            TemperatureConversion = "FahrenheitToKelvin",
                            TemperatureFormula = "(x - 32) * (5/9) + 273.15",
                            TemperatureName = "Fahrenheit"
                        },
                        new
                        {
                            Id = 5,
                            TemperatureConversion = "KelvinToCelsius",
                            TemperatureFormula = "x - 273.15",
                            TemperatureName = "Kelvin"
                        },
                        new
                        {
                            Id = 6,
                            TemperatureConversion = "KelvinToFahrenheit",
                            TemperatureFormula = "(x - 273.15) * (9/5) + 32",
                            TemperatureName = "Kelvin"
                        });
                });

            modelBuilder.Entity("QuarterProject.Models.RegisteredUser", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasMaxLength(40)
                        .HasColumnType("nvarchar(40)");

                    b.Property<string>("UserText")
                        .IsRequired()
                        .HasMaxLength(1000)
                        .HasColumnType("nvarchar(1000)");

                    b.HasKey("Id");

                    b.ToTable("RegisteredUser");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            UserName = "Admin",
                            UserText = "T E S T\r\nS     E\r\nE     S\r\nT S E T"
                        },
                        new
                        {
                            Id = 2,
                            UserName = "Admin",
                            UserText = "TTTTTTTTTT EEEEEEEE SSSSSSSS TTTTTTTTTT\r\n    TT     EE       SS           TT\r\n    TT     EEEEEEE  SSSSSSSS     TT\r\n    TT     EE             SS     TT\r\n    TT     EEEEEEEE SSSSSSSS     TT"
                        },
                        new
                        {
                            Id = 3,
                            UserName = "Admin",
                            UserText = "<tbody>\r\n    @foreach (var item in Model)\r\n    {\r\n        <tr>\r\n            <td class=\"col-1 border-right\">\r\n                <a asp-action=\"Edit\" asp-route-id=\"@item.Id\">Edit</a><br>\r\n                <a asp-action=\"Details\" asp-route-id=\"@item.Id\">Details</a><br>\r\n                <a asp-action=\"Delete\" asp-route-id=\"@item.Id\">Delete</a>\r\n            </td>\r\n            <td>\r\n                <pre>@Html.DisplayFor(modelItem => item.UserText)</pre>\r\n            </td>\r\n        </tr>\r\n    }\r\n</tbody>"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
