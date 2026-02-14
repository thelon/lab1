using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Reflection.Metadata;
using ToDoBackend.Models;

namespace ToDoBackend.Services
{
    public class GlobalExceptionHandler : IExceptionHandler
    {
        public async ValueTask<bool> TryHandleAsync(
            HttpContext httpContext,
            Exception exception,
            CancellationToken cancellationToken)
        {
            // Check if the exception is our specific type

            

            if (exception is  EntityNotFoundException)
            {
                return false; // Let other handlers or the default dev page handle it
            }

            var problemDetails = GetProblemDetails(exception);
            
            httpContext.Response.StatusCode = problemDetails.Status ?? StatusCodes.Status500InternalServerError;

            await httpContext.Response
                .WriteAsJsonAsync(problemDetails, cancellationToken);

            return true; // We handled the exception
        }

        static ProblemDetails GetProblemDetails(Exception ex)
        {
            if (ex is EntityNotFoundException)
            {
                return new ProblemDetails
                {
                    Status = StatusCodes.Status404NotFound,
                    Title = "Resource Not Found",
                    Detail = ex.Message
                };
            }
            if (ex is ApplicationException) 
            {
                return new ProblemDetails
                {
                    Status = StatusCodes.Status400BadRequest,
                    Title = "Bad request",
                    Detail = ex.Message
                };
            }
           return new ProblemDetails
           {
               Status = StatusCodes.Status400BadRequest,
               Title = "Server Error",
               Detail = "Unknown server error"
           };

        }

    }
}
