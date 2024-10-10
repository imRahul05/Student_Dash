'use client'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, BookOpen, Calendar, Users } from "lucide-react"
import { ReactNode } from 'react'
import { FloatingNav } from '../components/ui/floating-navbar' // Corrected import path
import { useMotionValue, useScroll, useTransform } from 'framer-motion' // Correct import for useMotionValue
import { GoogleGeminiEffect } from '@/components/ui/google-gemini-effect'
import React from 'react'

export default function HomePage() {
  // Define navigation items
  const navItems = [
    { name: 'Dashboard', link: '/dashboard', icon: <GraduationCap className="h-6 w-6" /> },
    { name: 'Courses', link: '/courses', icon: <BookOpen className="h-6 w-6" /> },
    { name: 'Calendar', link: '/calendar', icon: <Calendar className="h-6 w-6" /> },
    { name: 'Resources', link: '/resources', icon: <Users className="h-6 w-6" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <FloatingNav navItems={navItems} className="top-16" /> {/* Include FloatingNav */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Welcome to Student Dashboard
          </h1>
          <p className="text-xl text-gray-300 mb-8">Manage your educational journey with ease</p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-gray-300 border-gray-300 hover:bg-gray-700">
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <FeatureCard icon={<GraduationCap className="h-8 w-8 text-blue-400" />} title="Track Progress" description="Monitor your academic achievements and milestones" />
          <FeatureCard icon={<BookOpen className="h-8 w-8 text-green-400" />} title="Course Management" description="Organize and access your course materials effortlessly" />
          <FeatureCard icon={<Calendar className="h-8 w-8 text-yellow-400" />} title="Schedule Planner" description="Plan your study sessions and never miss a deadline" />
          <FeatureCard icon={<Users className="h-8 w-8 text-purple-400" />} title="Collaboration Tools" description="Connect with peers and work on group projects seamlessly" />
        </div>
      </main>
      <GoogleGeminiEffectDemo /> {/* Include GoogleGeminiEffectDemo */}
    </div>
  )
}

function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-sm font-medium hover:text-white transition-colors"
    >
      {children}
    </Link>
  )
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}