// 'use client'

// import { useState } from 'react'
// import { databases } from '@/lib/appwrite'
// import { Query } from 'appwrite'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import Link from 'next/link'

// export default function SearchPage() {
//   const [searchTerm, setSearchTerm] = useState('')
//   const [searchResults, setSearchResults] = useState<Document[]>([])

//   const handleSearch = async () => {
//     try {
//       const response = await databases.listDocuments(
//         'profiles',
//         [
//           Query.search('name', searchTerm),
//           Query.limit(10)
//         ].join(',')
//       )
//     setSearchResults(response.documents)
//     } catch (error) {
//       console.error('Search error:', error)
//     }
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Search Students</h1>
      
//       <div className="flex space-x-4 mb-8">
//         <Input
//           type="text"
//           placeholder="Search by name or skill"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <Button onClick={handleSearch}>Search</Button>
//       </div>
      
//       <div className="space-y-4">
//         {searchResults.map((result) => (
//           <div key={result.$id} className="p-4 border rounded">
//             <h2 className="text-xl font-semibold">{result.name}</h2>
//             <p>{result.skills.join(', ')}</p>
//             <Link href={`/profile/${result.$id}`} className="text-blue-500 hover:underline">
//               View Profile
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }