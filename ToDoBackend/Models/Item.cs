namespace ToDoBackend.Models
{
    public class Item
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public required string Description { get; set; }
        public DateTime CreatedTime { get; set; }        
        public DateTime? DoneTime { get; set; }
        public bool Done => DoneTime.HasValue;
    }
}
