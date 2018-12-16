import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import "react-tabs/style/react-tabs.less"
import { connect } from 'react-redux'
import MonacoEditor from 'react-monaco-editor'
import { getFileName } from 'UTIL'
import './editorTabs.less'

class EditorTabs extends React.PureComponent {
  render() {
    const { editFiles } = this.props
    return <Tabs>
      <TabList>
        {editFiles.map(f => {
          return <Tab key={f.path}>{getFileName(f.path)}</Tab>
        })}
      </TabList>
      {editFiles.map(f => {
        return  <TabPanel key={f.path}>
              <MonacoEditor
                language="javascript"
                theme="vs-dark"
                value={f.content}
                options={{
                  selectOnLineNumbers: true
                }}
              />
            </TabPanel>
      })}
    </Tabs>
  }
}

const mapState2Props = (state) => {
  const {  editFiles } = state
  return {
    editFiles
  }
}

export default connect(mapState2Props)(EditorTabs)