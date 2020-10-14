import { createSelector } from 'reselect'


const selectDirectory = state => state.state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory = directory.sections
)