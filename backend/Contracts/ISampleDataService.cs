using System.Collections.Generic;
using Firstproject.WebApi.Models;

namespace Firstproject.WebApi.Contracts
{
    public interface ISampleDataService
    {
        IEnumerable<SampleCompany> GetSampleCompanies();
    }
}
