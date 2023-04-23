import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

const PostTemplate = (props: { postId: string }) => {
  // const data: Queries.MdWrapperQuery = useStaticQuery(graphql`
  //   query MdWrapper {
  //     html
  //     frontmatter {
  //       slug
  //       title
  //     }
  //   }
  // `)

  const { markdownRemark } = data // data.markdownRemark holds your post data
  return (
    <div>
      <div>
        <h1>{markdownRemark?.frontmatter?.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: markdownRemark?.html || '' }}
        />
      </div>
    </div>
  )
}

export default PostTemplate