using System;
using System.IO;

// See https://aka.ms/new-console-template for more information
// Console.WriteLine($"Hello, World!", args[0]);
if (args.Length < 2)
{
    Console.WriteLine("Error: No project name parameter was specified.");
    Console.WriteLine("Please use format: pnpm new -- <new-package-name>");
    return;
}

var name = args[0];
var packageRoot = args[1];

if (name.Contains(" "))
{
    Console.WriteLine("Name cannot contain any spaces");
    return;
}

var projectsPath = Path.Combine(packageRoot, Path.Join("src", "projects"));
var scritpsPath = Path.Combine(packageRoot, Path.Join("scripts");
var source = Path.Combine(projectsPath, "_project-template");
var destination = Path.Combine(projectsPath, name);


if (!Directory.Exists(destination))
{
    Console.WriteLine($"Creating new node package '{name}'");
    CopyDirectory(source, destination, true);
}
else
{
    Console.WriteLine($"Node package project folder '{name}', already exist");
}

// TODO: Add scripts folder package entry
// File.WriteAllText()
// pnpm vite ./src/projects/vue-slots

static void CopyDirectory(string sourceDir, string destinationDir, bool recursive)
{
    // Get information about the source directory
    var dir = new DirectoryInfo(sourceDir);

    // Check if the source directory exists
    if (!dir.Exists)
        throw new DirectoryNotFoundException($"Source directory not found: {dir.FullName}");

    // Cache directories before we start copying
    DirectoryInfo[] dirs = dir.GetDirectories();

    // Create the destination directory
    Directory.CreateDirectory(destinationDir);

    // Get the files in the source directory and copy to the destination directory
    foreach (FileInfo file in dir.GetFiles())
    {
        string targetFilePath = Path.Combine(destinationDir, file.Name);
        file.CopyTo(targetFilePath);
    }

    // If recursive and copying subdirectories, recursively call this method
    if (recursive)
    {
        foreach (DirectoryInfo subDir in dirs)
        {
            string newDestinationDir = Path.Combine(destinationDir, subDir.Name);
            CopyDirectory(subDir.FullName, newDestinationDir, true);
        }
    }
}