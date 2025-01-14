/*
 * Copyright (C) 2018 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import IconAdd from '@instructure/ui-icons/lib/Line/IconAdd'
import IconEdit from '@instructure/ui-icons/lib/Line/IconEdit'
import IconGradebook from '@instructure/ui-icons/lib/Line/IconGradebook'
import IconQuestion from '@instructure/ui-icons/lib/Line/IconQuestion'
import IconTrash from '@instructure/ui-icons/lib/Line/IconTrash'

import * as AuditTrailHelpers from '../AuditTrailHelpers'
import {buildEvent} from './AuditTrailSpecHelpers'

describe('AuditTrailHelpers', () => {
  function buildEventOfType(eventType, data = {}) {
    return buildEvent({eventType, ...data})
  }

  describe('.iconFor()', () => {
    it('returns IconAdd for "assignment_created" events', () => {
      const event = buildEventOfType('assignment_created')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconAdd)
    })

    it('returns IconEdit for "assignment_updated" events', () => {
      const event = buildEventOfType('assignment_updated')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconEdit)
    })

    it('returns IconAdd for "docviewer_area_created" events', () => {
      const event = buildEventOfType('docviewer_area_created')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconAdd)
    })

    it('returns IconTrash for "docviewer_area_deleted" events', () => {
      const event = buildEventOfType('docviewer_area_deleted')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconTrash)
    })

    it('returns IconEdit for "docviewer_area_updated" events', () => {
      const event = buildEventOfType('docviewer_area_updated')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconEdit)
    })

    it('returns IconAdd for "docviewer_comment_created" events', () => {
      const event = buildEventOfType('docviewer_comment_created')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconAdd)
    })

    it('returns IconTrash for "docviewer_comment_deleted" events', () => {
      const event = buildEventOfType('docviewer_comment_deleted')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconTrash)
    })

    it('returns IconEdit for "docviewer_comment_updated" events', () => {
      const event = buildEventOfType('docviewer_comment_updated')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconEdit)
    })

    it('returns IconAdd for "docviewer_free_draw_created" events', () => {
      const event = buildEventOfType('docviewer_free_draw_created')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconAdd)
    })

    it('returns IconTrash for "docviewer_free_draw_deleted" events', () => {
      const event = buildEventOfType('docviewer_free_draw_deleted')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconTrash)
    })

    it('returns IconEdit for "docviewer_free_draw_updated" events', () => {
      const event = buildEventOfType('docviewer_free_draw_updated')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconEdit)
    })

    it('returns IconAdd for "docviewer_free_text_created" events', () => {
      const event = buildEventOfType('docviewer_free_text_created')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconAdd)
    })

    it('returns IconTrash for "docviewer_free_text_deleted" events', () => {
      const event = buildEventOfType('docviewer_free_text_deleted')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconTrash)
    })

    it('returns IconEdit for "docviewer_free_text_updated" events', () => {
      const event = buildEventOfType('docviewer_free_text_updated')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconEdit)
    })

    it('returns IconAdd for "docviewer_highlight_created" events', () => {
      const event = buildEventOfType('docviewer_highlight_created')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconAdd)
    })

    it('returns IconTrash for "docviewer_highlight_deleted" events', () => {
      const event = buildEventOfType('docviewer_highlight_deleted')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconTrash)
    })

    it('returns IconEdit for "docviewer_highlight_updated" events', () => {
      const event = buildEventOfType('docviewer_highlight_updated')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconEdit)
    })

    it('returns IconAdd for "docviewer_point_created" events', () => {
      const event = buildEventOfType('docviewer_point_created')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconAdd)
    })

    it('returns IconTrash for "docviewer_point_deleted" events', () => {
      const event = buildEventOfType('docviewer_point_deleted')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconTrash)
    })

    it('returns IconEdit for "docviewer_point_updated" events', () => {
      const event = buildEventOfType('docviewer_point_updated')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconEdit)
    })

    it('returns IconAdd for "docviewer_strikeout_created" events', () => {
      const event = buildEventOfType('docviewer_strikeout_created')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconAdd)
    })

    it('returns IconTrash for "docviewer_strikeout_deleted" events', () => {
      const event = buildEventOfType('docviewer_strikeout_deleted')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconTrash)
    })

    it('returns IconEdit for "docviewer_strikeout_updated" events', () => {
      const event = buildEventOfType('docviewer_strikeout_updated')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconEdit)
    })

    it('returns IconGradebook for "grades_posted" events', () => {
      const event = buildEventOfType('grades_posted')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconGradebook)
    })

    it('returns IconAdd for "provisional_grade_created" events', () => {
      const event = buildEventOfType('provisional_grade_created')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconAdd)
    })

    it('returns IconTrash for "provisional_grade_deleted" events', () => {
      const event = buildEventOfType('provisional_grade_deleted')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconTrash)
    })

    it('returns IconEdit for "provisional_grade_selected" events', () => {
      const event = buildEventOfType('provisional_grade_selected')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconEdit)
    })

    it('returns IconEdit for "provisional_grade_updated" events', () => {
      const event = buildEventOfType('provisional_grade_updated')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconEdit)
    })

    it('returns IconAdd for "rubric_created" events', () => {
      const event = buildEventOfType('rubric_created')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconAdd)
    })

    it('returns IconTrash for "rubric_deleted" events', () => {
      const event = buildEventOfType('rubric_deleted')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconTrash)
    })

    it('returns IconEdit for "rubric_updated" events', () => {
      const event = buildEventOfType('rubric_updated')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconEdit)
    })

    it('returns IconAdd for "submission_comment_created" events', () => {
      const event = buildEventOfType('submission_comment_created')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconAdd)
    })

    it('returns IconTrash for "submission_comment_deleted" events', () => {
      const event = buildEventOfType('submission_comment_deleted')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconTrash)
    })

    it('returns IconEdit for "submission_comment_updated" events', () => {
      const event = buildEventOfType('submission_comment_updated')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconEdit)
    })

    it('returns IconEdit for "submission_updated" events', () => {
      const event = buildEventOfType('submission_updated')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconEdit)
    })

    it('returns IconQuestion for unknown events', () => {
      const event = buildEventOfType('unknown')
      expect(AuditTrailHelpers.iconFor(event)).toBe(IconQuestion)
    })
  })

  describe('.labelFor()', () => {
    it('returns a specific label for "assignment_created" events', () => {
      const event = buildEventOfType('assignment_created')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Assignment created')
    })

    it('returns a specific label for "assignment_updated" events', () => {
      const event = buildEventOfType('assignment_updated')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Assignment updated')
    })

    it('returns a specific label for "docviewer_area_created" events', () => {
      const event = buildEventOfType('docviewer_area_created')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Docviewer area created')
    })

    it('returns a specific label for "docviewer_area_deleted" events', () => {
      const event = buildEventOfType('docviewer_area_deleted')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Docviewer area deleted')
    })

    it('returns a specific label for "docviewer_area_updated" events', () => {
      const event = buildEventOfType('docviewer_area_updated')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Docviewer area updated')
    })

    it('returns a specific label for "docviewer_comment_created" events', () => {
      const event = buildEventOfType('docviewer_comment_created')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Docviewer comment created')
    })

    it('returns a specific label for "docviewer_comment_deleted" events', () => {
      const event = buildEventOfType('docviewer_comment_deleted')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Docviewer comment deleted')
    })

    it('returns a specific label for "docviewer_comment_updated" events', () => {
      const event = buildEventOfType('docviewer_comment_updated')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Docviewer comment updated')
    })

    it('returns a specific label for "docviewer_free_draw_created" events', () => {
      const event = buildEventOfType('docviewer_free_draw_created')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Docviewer free draw created')
    })

    it('returns a specific label for "docviewer_free_draw_deleted" events', () => {
      const event = buildEventOfType('docviewer_free_draw_deleted')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Docviewer free draw deleted')
    })

    it('returns a specific label for "docviewer_free_draw_updated" events', () => {
      const event = buildEventOfType('docviewer_free_draw_updated')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Docviewer free draw updated')
    })

    it('returns a specific label for "docviewer_free_text_created" events', () => {
      const event = buildEventOfType('docviewer_free_text_created')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Docviewer free text created')
    })

    it('returns a specific label for "docviewer_free_text_deleted" events', () => {
      const event = buildEventOfType('docviewer_free_text_deleted')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Docviewer free text deleted')
    })

    it('returns a specific label for "docviewer_free_text_updated" events', () => {
      const event = buildEventOfType('docviewer_free_text_updated')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Docviewer free text updated')
    })

    it('returns a specific label for "docviewer_highlight_created" events', () => {
      const event = buildEventOfType('docviewer_highlight_created')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Docviewer highlight created')
    })

    it('returns a specific label for "docviewer_highlight_deleted" events', () => {
      const event = buildEventOfType('docviewer_highlight_deleted')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Docviewer highlight deleted')
    })

    it('returns a specific label for "docviewer_highlight_updated" events', () => {
      const event = buildEventOfType('docviewer_highlight_updated')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Docviewer highlight updated')
    })

    it('returns a specific label for "docviewer_point_created" events', () => {
      const event = buildEventOfType('docviewer_point_created')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Docviewer point created')
    })

    it('returns a specific label for "docviewer_point_deleted" events', () => {
      const event = buildEventOfType('docviewer_point_deleted')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Docviewer point deleted')
    })

    it('returns a specific label for "docviewer_point_updated" events', () => {
      const event = buildEventOfType('docviewer_point_updated')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Docviewer point updated')
    })

    it('returns a specific label for "docviewer_strikeout_created" events', () => {
      const event = buildEventOfType('docviewer_strikeout_created')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Docviewer strikeout created')
    })

    it('returns a specific label for "docviewer_strikeout_deleted" events', () => {
      const event = buildEventOfType('docviewer_strikeout_deleted')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Docviewer strikeout deleted')
    })

    it('returns a specific label for "docviewer_strikeout_updated" events', () => {
      const event = buildEventOfType('docviewer_strikeout_updated')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Docviewer strikeout updated')
    })

    it('returns a specific label for "grades_posted" events', () => {
      const event = buildEventOfType('grades_posted')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Grades posted')
    })

    it('returns a specific label for "provisional_grade_created" events', () => {
      const event = buildEventOfType('provisional_grade_created')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Provisional grade created')
    })

    it('returns a specific label for "provisional_grade_deleted" events', () => {
      const event = buildEventOfType('provisional_grade_deleted')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Provisional grade deleted')
    })

    it('returns a specific label for "provisional_grade_selected" events', () => {
      const event = buildEventOfType('provisional_grade_selected')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Provisional grade selected')
    })

    it('returns a specific label for "provisional_grade_updated" events', () => {
      const event = buildEventOfType('provisional_grade_updated')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Provisional grade updated')
    })

    it('returns a specific label for "rubric_created" events', () => {
      const event = buildEventOfType('rubric_created')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Rubric created')
    })

    it('returns a specific label for "rubric_deleted" events', () => {
      const event = buildEventOfType('rubric_deleted')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Rubric deleted')
    })

    it('returns a specific label for "rubric_updated" events', () => {
      const event = buildEventOfType('rubric_updated')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Rubric updated')
    })

    it('returns a specific label for "submission_comment_created" events', () => {
      const event = buildEventOfType('submission_comment_created')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Submission comment created')
    })

    it('returns a specific label for "submission_comment_deleted" events', () => {
      const event = buildEventOfType('submission_comment_deleted')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Submission comment deleted')
    })

    it('returns a specific label for "submission_comment_updated" events', () => {
      const event = buildEventOfType('submission_comment_updated')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Submission comment updated')
    })

    it('returns a specific label for "submission_updated" events', () => {
      const event = buildEventOfType('submission_updated')
      expect(AuditTrailHelpers.labelFor(event)).toEqual('Submission updated')
    })

    it('returns "Unknown event" for unknown events', () => {
      const event = buildEventOfType('unknown')
      expect(AuditTrailHelpers.labelFor(event)).toBe('Unknown event')
    })
  })

  describe('.snippetFor()', () => {
    it('returns null for unknown events', () => {
      const event = buildEventOfType('unknown')
      expect(AuditTrailHelpers.snippetFor(event)).toBeNull()
    })
  })
})
