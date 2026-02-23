import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
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
          {project.description ? (
            <CardDescription className="text-pretty text-gray-400 mt-2">
              {project.description}
            </CardDescription>
          ) : null}
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Enhanced Image Container with Glow Effect */}
          <div className="relative overflow-hidden rounded-xl border border-gray-600/50 group-hover:border-cyan-400/40 transition-all duration-500">
            <div
              className={`absolute inset-0 bg-gray-800 animate-pulse ${
                isImageLoaded ? "hidden" : "block"
              }`}
            />
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.alt}
              className={`w-full h-44 object-cover transition-all duration-700 ${
                isImageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
              } group-hover:scale-110`}
              onLoad={() => setIsImageLoaded(true)}
            />
            {/* Glow overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Enhanced Tags with Glow Effects */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-800/80 text-gray-300 border border-gray-700/50 hover:bg-cyan-900/30 hover:text-cyan-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-default"
                aria-label={`Technology: ${tag}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-end gap-3 pt-2">
          {project.githubUrl ? (
            <Button
              variant="outline"
              asChild
              className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white hover:border-gray-500 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 group/btn"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open GitHub for ${project.title}`}
                className="flex items-center gap-2"
              >
                <svg
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                GitHub
              </a>
            </Button>
          ) : null}
          {project.demoUrl ? (
            <Button
              asChild
              className="bg-cyan-600 hover:bg-cyan-500 text-white hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 group/btn"
            >
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live demo for ${project.title}`}
                className="flex items-center gap-2"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z"></path>
                  <path d="M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z"></path>
                </svg>
                Live Demo
              </a>
            </Button>
          ) : null}
        </CardFooter>
      </Card>
    </article>
  );
}

export type { Project };
