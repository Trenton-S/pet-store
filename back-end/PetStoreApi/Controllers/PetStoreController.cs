using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;

namespace PetStoreApi.Controllers;

[ApiController]
[Route("[controller]")]
public class PetStoreController : ControllerBase
{
    private readonly HttpClient httpClient;

    public PetStoreController(HttpClient httpClient)
    {
        this.httpClient = httpClient;
    }


    public enum Status
    {
        available,
        pending,
        sold

    }

    [HttpGet(Name = "findyByStatus")]
    public async Task<IActionResult> GetPetsByStatus(
        [FromQuery(Name = "status")] List<Status> statuses
    )
    {
        string petStoreUrl = "https://petstore.swagger.io/v2/pet/findByStatus";
        petStoreUrl = $"{petStoreUrl}?status={string.Join("&status=", statuses)}";

        var response = await httpClient.GetAsync(petStoreUrl);
        var content = await response.Content.ReadAsStringAsync();

        return Content(content, "application/json");
    }
}
