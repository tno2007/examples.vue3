using System.Security.Cryptography;
using System.Text;

namespace CookieAuth.Utilities
{
    public static class Md5Hasher
    {
        public static string CalculateMd5Hash(string input)
        {
            using (var md5 = MD5.Create())
            {
                var inputBytes = Encoding.ASCII.GetBytes(input);
                var hashBytes = md5.ComputeHash(inputBytes);

                var sb = new StringBuilder();
                foreach (var t in hashBytes)
                {
                    sb.Append(t.ToString("x2"));
                }

                return sb.ToString();
            }
        }
    }
}