using System.ComponentModel.DataAnnotations;

namespace QuarterProject.Models
{
    /// <summary>
    /// Represents a currency conversion model.
    /// </summary>
    public class ConvertCurrency
    {
        /// <summary>
        /// The currency code (ISO 4217).
        /// </summary>
        [Key]
        [StringLength(3)]
        public required string CurrencyCode { get; set; }

        /// <summary>
        /// The currency name.
        /// </summary>
        public required string CurrencyName { get; set; }
    }
}
