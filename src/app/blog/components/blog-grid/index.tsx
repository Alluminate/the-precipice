import { BlogCard } from "./blog-card";


const blogdata = [{
  "heroImage": {
    "imageUrl": "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
    "description": "felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc",
    "title": "Honorable"
  },
  "publishedDate": "1/13/2023",
  "title": "Integrated 5th generation policy",
  "excerpt": "Implemented mobile installation",
  "slug": "$2a$04$tlNe.4hvOYqYD/k9868noedYBrEkoHEmR9HKQZW5aOEFx6/XHXp0G",
  "tag": "Radiance",
}, {
  "heroImage": {
    "imageUrl": "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
    "description": "felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc",
    "title": "Honorable"
  },
  "publishedDate": "7/24/2022",
  "title": "Diverse reciprocal success",
  "excerpt": "De-engineered methodical circuit",
  "slug": "$2a$04$BEd41B0AHN5C9KQOw8tfDeKFjm/9P4GOdfLuo7aBNhhcYWQdpi01C",
  "tag": "Miscellaneous",
}, {
  "heroImage": {
    "imageUrl": "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
    "description": "felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc",
    "title": "Honorable"
  },
  "publishedDate": "8/7/2022",
  "title": "Stand-alone homogeneous definition",
  "excerpt": "Expanded bandwidth-monitored hardware",
  "slug": "$2a$04$BSEHgHcmnHDTM3CP6Hh11uV5smL6co1rFCZ259L39Qh4jY0MvtNQq",
  "tag": "Consumer Non-Durables",
}, {
  "heroImage": {
    "imageUrl": "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
    "description": "felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc",
    "title": "Honorable"
  },
  "publishedDate": "3/24/2023",
  "title": "De-engineered 4th generation local area network",
  "excerpt": "Quality-focused asynchronous service-desk",
  "slug": "$2a$04$ltFNzHwCIlKeEgtKRWEshuWH5rPmTq4a4DMMLLY2ij6YPQIodaIwS",
  "tag": "Technology",
}, {
  "heroImage": {
    "imageUrl": "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
    "description": "felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc",
    "title": "Honorable"
  },
  "publishedDate": "9/10/2022",
  "title": "Synchronised local frame",
  "excerpt": "Ergonomic non-volatile knowledge base",
  "slug": "$2a$04$BG8DPC397/fph9ct1nih9.17dmf/ax4RTpqOe1oyfvloNYHDzYz.q",
  "tag": "Transportation",
}, {
  "heroImage": {
    "imageUrl": "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
    "description": "felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc",
    "title": "Honorable"
  },
  "publishedDate": "10/19/2022",
  "title": "Multi-channelled exuding standardization",
  "excerpt": "Ameliorated discrete array",
  "slug": "$2a$04$mZrSaKa.IGSK47n2T.Ljy.hFKO32eB4lMLTGSWnBSNSFz6.G6t3cm",
  "tag": "Technology",
}]

export function BlogGrid() {
  return (
    <div className="container grid grid-cols-holy-grail gap-4">
      {blogdata.map(item => <BlogCard key={item.title} {...item} />)}
    </div>
  )
}