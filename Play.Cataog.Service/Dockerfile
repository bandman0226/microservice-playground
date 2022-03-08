FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["Play.Cataog.Service/Play.Cataog.Service.csproj", "Play.Cataog.Service/"]
RUN dotnet restore "Play.Cataog.Service/Play.Cataog.Service.csproj"
COPY . .
WORKDIR "/src/Play.Cataog.Service"
RUN dotnet build "Play.Cataog.Service.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Play.Cataog.Service.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Play.Cataog.Service.dll"]
