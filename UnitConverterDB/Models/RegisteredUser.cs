using System.ComponentModel.DataAnnotations;

namespace UnitConverterDB.Models
{
    /// <summary>
    /// Represents a Registered User.
    /// </summary>
    public class RegisteredUser
    {
        /// <summary>
        /// The unique identifier for each UserText.
        /// </summary>
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// The User Name is generated from the User Identity Name.
        /// </summary>
        [StringLength(40)]
        public required string UserName { get; set; }

        /// <summary>
        /// The User entered text title.
        /// </summary>
        [StringLength(40)]
        public required string UserTextTitle { get; set; } = "No Title";

        /// <summary>
        /// The User entered text.
        /// </summary>
        [StringLength(1000)]
        public required string UserText { get; set; }
    }
}
