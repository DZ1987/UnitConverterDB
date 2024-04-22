using System.ComponentModel.DataAnnotations;

namespace QuarterProject.Models
{
    /// <summary>
    /// Represents a temperature conversion model.
    /// </summary>
    public class ConvertTemperature
    {
        /// <summary>
        /// The unique identifier for a temperature conversion.
        /// </summary>
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// Represents the name of the temperature scale.
        /// </summary>
        public required string TemperatureName { get; set; }

        /// <summary>
        /// Represents the conversion method name from one temperature scale to another.
        /// </summary>
        public required string TemperatureConversion { get; set; }

        /// <summary>
        /// Represents the mathematical formula used for the temperature conversion.
        /// </summary>
        public required string TemperatureFormula { get; set; }
    }
}
