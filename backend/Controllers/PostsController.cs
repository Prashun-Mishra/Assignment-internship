using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Data;

namespace backend.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase {
        private readonly DataContext _context;

        public PostsController(DataContext context) {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetPosts() {
            return Ok(_context.Posts.ToList());
        }

        [HttpPost]
        public IActionResult CreatePost([FromBody] Post post) {
            _context.Posts.Add(post);
            _context.SaveChanges();
            return Ok(post);
        }
    }
}
