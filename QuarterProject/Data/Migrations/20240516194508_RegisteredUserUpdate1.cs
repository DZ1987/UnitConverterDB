using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace QuarterProject.Data.Migrations
{
    /// <inheritdoc />
    public partial class RegisteredUserUpdate1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserTextTitle",
                table: "RegisteredUser",
                type: "nvarchar(40)",
                maxLength: 40,
                nullable: false,
                defaultValue: "No Title");

            migrationBuilder.UpdateData(
                table: "RegisteredUser",
                keyColumn: "Id",
                keyValue: 1,
                column: "UserTextTitle",
                value: "Test Box");

            migrationBuilder.UpdateData(
                table: "RegisteredUser",
                keyColumn: "Id",
                keyValue: 2,
                column: "UserTextTitle",
                value: "Test ASCII");

            migrationBuilder.UpdateData(
                table: "RegisteredUser",
                keyColumn: "Id",
                keyValue: 3,
                column: "UserTextTitle",
                value: "Foreach Table");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserTextTitle",
                table: "RegisteredUser");
        }
    }
}
