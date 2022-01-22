dotnet add package QRCode

[HttpGet]
public IActionResult Get(string url)
{
    var payload = new PayloadGenerator.Url(url).ToString();
    var data = new QRCodeGenerator().CreateQrCode(payload, QRCodeGenerator.ECCLevel.Q);

    var qrCode = new SvgQRCode(data).GetGraphic(20);

    return this.Content(qrCode, MediaTypeHeaderValue.Parse("image/svg+xml"));
}
git rm
