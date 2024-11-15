'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bell, Briefcase, Users } from 'lucide-react'

export default function Component() {
  const [skills, setSkills] = useState<string[]>([])
  const [currentSkill, setCurrentSkill] = useState('')

  const platforms = [
    { id: 'codechef', label: 'Codechef' },
    { id: 'stackoverflow', label: 'Stackoverflow' },
    { id: 'leetcode', label: 'Leetcode' },
    { id: 'geeksforgeeks', label: 'GeeksForGeeks' },
    { id: 'atcoder', label: 'AtCoder' },
  ]

  const topics = [
    { id: 'news', label: 'News' },
    { id: 'topics-interests', label: 'Topics Interests' },
    { id: 'hackathons', label: 'Hackathons' },
    { id: 'events', label: 'Events' },
  ]

  const handleAddSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentSkill.trim()) {
      setSkills([...skills, currentSkill.trim()])
      setCurrentSkill('')
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove))
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Tabs defaultValue="jobs" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="jobs" className="space-x-2">
            <Briefcase className="h-4 w-4" />
            <span>Jobs Alert</span>
          </TabsTrigger>
          <TabsTrigger value="contact" className="space-x-2">
            <Bell className="h-4 w-4" />
            <span>Contact Alert</span>
          </TabsTrigger>
          <TabsTrigger value="social" className="space-x-2">
            <Users className="h-4 w-4" />
            <span>Social Alerts</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="jobs">
          <Card>
            <CardHeader>
              <CardTitle>Set Up Job Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="Enter your full name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Skills</Label>
                <Input
                  id="skills"
                  value={currentSkill}
                  onChange={(e) => setCurrentSkill(e.target.value)}
                  onKeyDown={handleAddSkill}
                  placeholder="Type a skill and press Enter"
                />
                <div className="flex flex-wrap gap-2 mt-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => removeSkill(skill)}
                    >
                      {skill} ×
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="jobRoles">Job Roles</Label>
                  <Input id="jobRoles" placeholder="Desired job roles" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience</Label>
                  <Input id="experience" placeholder="Years of experience" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="details">Details</Label>
                  <Input id="details" placeholder="Additional details" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salary">Salary Expected</Label>
                  <Input id="salary" placeholder="Expected salary range" />
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <Label htmlFor="companies">Companies of Interest</Label>
                <Input
                  id="companies"
                  placeholder="Enter the names of companies that you want to get alert for any of role that you are eligible in"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="portfolio">Portfolio Link</Label>
                <Input id="portfolio" placeholder="Enter link of any career portfolio that you want to get alert on" />
              </div>

              <Button className="w-full">Subscribe to Get Alert</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Platform Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {platforms.map((platform) => (
                <div key={platform.id} className="flex items-center space-x-2">
                  <Checkbox id={platform.id} />
                  <Label htmlFor={platform.id}>{platform.label}</Label>
                </div>
              ))}
              <Button className="w-full mt-4">Subscribe</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle>Social Feed Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Get a personalized news feed with the help of AI Automated which are actually great to you about the social developments in the field of AI and tech. You can also customize the feed based on your interest and get the most relevant news for you feed these news are curated using the platforms like Twitter, youtube, reddit and Substack!!
              </p>

              <div className="grid grid-cols-2 gap-4">
                {topics.map((topic) => (
                  <div key={topic.id} className="flex items-center space-x-2">
                    <Checkbox id={topic.id} />
                    <Label htmlFor={topic.id}>{topic.label}</Label>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <Input placeholder="Type" />
                <Input placeholder="City" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}