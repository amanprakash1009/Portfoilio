import { Button } from "./Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./card";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <article className="h-full group">
      <Card className="h-full bg-gray-900/40 text-card-foreground border-gray-700/50 hover:border-cyan-400/30 hover:bg-gray-800/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-pretty text-white text-xl font-semibold saira-font group-hover:text-cyan-400 transition-colors duration-300">
            {project.title}
          </CardTitle>
          {project.description && (
            <CardDescription className="text-pretty text-gray-400 mt-2">
              {project.description}
            </CardDescription>
          )}
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="relative overflow-hidden rounded-xl border border-gray-600/50 group-hover:border-cyan-400/40 transition-all duration-500">
            {!isImageLoaded && (
              <div className="absolute inset-0 bg-gray-800 animate-pulse" />
            )}

            <img
              src={project.image || "/placeholder.svg"}
              alt={project.alt}
              className={`w-full h-44 object-cover transition-all duration-700 ${
                isImageLoaded
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              } group-hover:scale-110`}
              onLoad={() => setIsImageLoaded(true)}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-800/80 text-gray-300 border border-gray-700/50 hover:bg-cyan-900/30 hover:text-cyan-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-end gap-3 pt-2">
          {project.githubUrl && (
            <Button
              variant="outline"
              asChild
              className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white hover:border-gray-500 transition-all duration-300"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
          )}

          {project.demoUrl && (
            <Button
              asChild
              className="bg-cyan-600 hover:bg-cyan-500 text-white transition-all duration-300"
            >
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </article>
  );
}

export type { Project };