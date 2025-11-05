"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import clsx from "clsx"

import { ScrollArea } from "@/components/ui/scroll-area"

export type TableAnchorProps = {
  tocs: { href: string; level: number; text: string }[]
}

export function TableAnchor({ tocs }: TableAnchorProps) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    // Create an intersection observer to track which heading is currently visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(`#${entry.target.id}`)
          }
        })
      },
      {
        rootMargin: "0px 0px -80% 0px", // Trigger when heading is in top 20% of viewport
        threshold: 1.0,
      }
    )

    // Observe all heading elements that are in the TOC
    const headingIds = tocs.map((toc) =>
      toc.href.startsWith("#") ? toc.href.slice(1) : toc.href
    )

    headingIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    // Cleanup observer on unmount
    return () => {
      headingIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [tocs])

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    const id = href.startsWith("#") ? href.slice(1) : href
    const targetElement = document.getElementById(id)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
      window.history.pushState(null, "", href)
      setActiveId(href) // Update active state immediately on click
    }
  }

  if (!tocs.length) {
    return null
  }

  return (
    <div className="flex w-full flex-col gap-3 pl-2">
      <h3 className="font-bold">On this page</h3>
      <ScrollArea className="pt-0.5 pb-4 max-h-[calc(100vh-18rem)]">
        <div className="text-foreground flex flex-col gap-2.5 text-sm">
          {tocs.map(({ href, level, text }) => {
            const isActive = activeId === href
            return (
              <Link
                key={href}
                href={href}
                title={text}
                aria-label={text}
                scroll={false}
                onClick={(e) => handleSmoothScroll(e, href)}
                className={clsx(
                  {
                    "pl-0 font-semibold": level == 2,
                    "pl-4": level == 3,
                    "pl-8": level == 4,
                  },
                  isActive && "text-primary font-bold"
                )}
              >
                {text}
              </Link>
            )
          })}
        </div>
      </ScrollArea>
    </div>
  )
}
