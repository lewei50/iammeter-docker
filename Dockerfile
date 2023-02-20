
FROM mcr.microsoft.com/dotnet/aspnet:7.0


WORKDIR /app


COPY . .


EXPOSE 5050 1883


ENTRYPOINT ["dotnet", "IAMMETER.Local.Web.dll"]