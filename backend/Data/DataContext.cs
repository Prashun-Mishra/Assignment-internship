using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data {
    public class DataContext : DbContext {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Post> Posts { get; set; }
    }
}
