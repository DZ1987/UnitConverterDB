using System.ComponentModel.DataAnnotations;

namespace UnitConverterDB.Models
{
    /// <summary>
    /// Represents a statistics model. 
    /// </summary>
    public class Statistics
    {
        /// <summary>
        /// The unsorted numbers.
        /// </summary>
        [Key]
        public string? Numbers { get; set; }

        /// <summary>
        /// The sorted numbers.
        /// </summary>
        public List<int>? NumbersSorted { get; set; }
    }
}