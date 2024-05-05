using System.ComponentModel.DataAnnotations;

namespace QuarterProject.Models
{
    /// <summary>
    /// Represents a length conversion model.
    /// </summary>
    public class ConvertLength
    {
        /// <summary>
        /// The unique identifier for a length conversion.
        /// </summary>
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// Represents the name of the length scale.
        /// </summary>
        public required string LengthName { get; set; }

        /// <summary>
        /// Represents the conversion method name from one length scale to another.
        /// </summary>
        public required string LengthConversion { get; set; }

        /// <summary>
        /// Represents the mathematical formula used for the length conversion.
        /// </summary>
        public required string LengthFormula { get; set; }
    }
}
