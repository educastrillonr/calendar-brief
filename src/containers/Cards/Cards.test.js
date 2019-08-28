import React from "react";
import { mount } from "enzyme";
import Cards from "./Cards";
import Card from "../../components/Card/Card";

const mockData = [
  {
    kind: "calendar#events",
    defaultReminders: [],
    description: "Calendar for _nology coding challenge",
    items: [
      {
        status: "confirmed",
        kind: "calendar#event",
        end: {
          date: "2019-05-07"
        },
        created: "2019-05-03T10:20:39.000Z",
        iCalUID: "4i6bi2c2qjjdab1too59vc9lal@google.com",
        reminders: {
          useDefault: true
        },
        extendedProperties: {
          private: {
            everyoneDeclinedDismissed: "-1"
          }
        },
        htmlLink:
          "https://www.google.com/calendar/event?eid=NGk2YmkyYzJxampkYWIxdG9vNTl2YzlsYWwgbm9sb2d5LmlvXzVzbWhlYWluY20yc2tkMXRjbXZ2N20zN2Q4QGc",
        sequence: 0,
        updated: "2019-05-03T10:20:39.508Z",
        summary: "Bank holiday",
        start: {
          date: "2019-05-06"
        },
        etag: '"3113757679016000"',
        transparency: "transparent",
        organizer: {
          self: true,
          displayName: "test public calendar",
          email:
            "nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com"
        },
        creator: {
          email: "liam@nology.io"
        },
        id: "4i6bi2c2qjjdab1too59vc9lal"
      },
      {
        status: "confirmed",
        kind: "calendar#event",
        end: {
          date: "2019-05-08"
        },
        created: "2019-05-03T10:20:52.000Z",
        iCalUID: "1jqm9c5pt41kfl42vggujglvr6@google.com",
        reminders: {
          useDefault: true
        },
        extendedProperties: {
          private: {
            everyoneDeclinedDismissed: "-1"
          }
        },
        htmlLink:
          "https://www.google.com/calendar/event?eid=MWpxbTljNXB0NDFrZmw0MnZnZ3VqZ2x2cjYgbm9sb2d5LmlvXzVzbWhlYWluY20yc2tkMXRjbXZ2N20zN2Q4QGc",
        sequence: 0,
        updated: "2019-05-03T11:02:56.252Z",
        summary: "User input to Kidie prototype",
        start: {
          date: "2019-05-07"
        },
        etag: '"3113762752504000"',
        transparency: "transparent",
        organizer: {
          self: true,
          displayName: "test public calendar",
          email:
            "nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com"
        },
        creator: {
          email: "liam@nology.io"
        },
        id: "1jqm9c5pt41kfl42vggujglvr6"
      },
      {
        status: "confirmed",
        kind: "calendar#event",
        end: {
          date: "2019-05-23"
        },
        created: "2019-05-03T11:04:08.000Z",
        iCalUID: "3cf85p5kg9l49eojmip8gu7ois@google.com",
        reminders: {
          useDefault: true
        },
        extendedProperties: {
          private: {
            everyoneDeclinedDismissed: "-1"
          }
        },
        htmlLink:
          "https://www.google.com/calendar/event?eid=M2NmODVwNWtnOWw0OWVvam1pcDhndTdvaXMgbm9sb2d5LmlvXzVzbWhlYWluY20yc2tkMXRjbXZ2N20zN2Q4QGc",
        sequence: 0,
        updated: "2019-05-03T11:04:08.618Z",
        summary: "The rise and fall of Rome",
        start: {
          date: "2019-05-22"
        },
        etag: '"3113762897236000"',
        transparency: "transparent",
        organizer: {
          self: true,
          displayName: "test public calendar",
          email:
            "nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com"
        },
        creator: {
          email: "liam@nology.io"
        },
        id: "3cf85p5kg9l49eojmip8gu7ois"
      },
      {
        status: "confirmed",
        kind: "calendar#event",
        end: {
          date: "2019-06-01"
        },
        created: "2019-05-07T11:13:22.000Z",
        iCalUID: "49tts4rnd43pdk4ccfo4thtafd@google.com",
        reminders: {
          useDefault: true
        },
        extendedProperties: {
          private: {
            everyoneDeclinedDismissed: "-1"
          }
        },
        htmlLink:
          "https://www.google.com/calendar/event?eid=NDl0dHM0cm5kNDNwZGs0Y2NmbzR0aHRhZmRfMjAxOTA1MzEgbm9sb2d5LmlvXzVzbWhlYWluY20yc2tkMXRjbXZ2N20zN2Q4QGc",
        sequence: 1,
        updated: "2019-05-07T11:14:01.327Z",
        summary: "End of Month Retro",
        recurrence: ["RRULE:FREQ=MONTHLY;BYDAY=-1FR"],
        start: {
          date: "2019-05-31"
        },
        etag: '"3114455282654000"',
        transparency: "transparent",
        organizer: {
          self: true,
          displayName: "Interpretive Dance Institute",
          email:
            "nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com"
        },
        creator: {
          email: "liam@nology.io"
        },
        id: "49tts4rnd43pdk4ccfo4thtafd"
      },
      {
        status: "confirmed",
        kind: "calendar#event",
        end: {
          date: "2019-05-02"
        },
        created: "2019-05-07T11:13:14.000Z",
        iCalUID: "3ht4hantutcbt18esdhg640t2d@google.com",
        reminders: {
          useDefault: true
        },
        extendedProperties: {
          private: {
            everyoneDeclinedDismissed: "-1"
          }
        },
        htmlLink:
          "https://www.google.com/calendar/event?eid=M2h0NGhhbnR1dGNidDE4ZXNkaGc2NDB0MmRfMjAxOTA1MDEgbm9sb2d5LmlvXzVzbWhlYWluY20yc2tkMXRjbXZ2N20zN2Q4QGc",
        sequence: 1,
        updated: "2019-05-07T11:14:11.595Z",
        summary: "Start of Month Event",
        recurrence: ["RRULE:FREQ=MONTHLY;BYDAY=1WE"],
        start: {
          date: "2019-05-01"
        },
        etag: '"3114455303190000"',
        transparency: "transparent",
        organizer: {
          self: true,
          displayName: "Interpretive Dance Institute",
          email:
            "nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com"
        },
        creator: {
          email: "liam@nology.io"
        },
        id: "3ht4hantutcbt18esdhg640t2d"
      },
      {
        status: "confirmed",
        kind: "calendar#event",
        end: {
          date: "2019-06-13"
        },
        description: "Shea tap's his way to the top!",
        created: "2019-05-07T11:13:44.000Z",
        iCalUID: "0mvq9t8jgdt67v5u4ued93ec8e@google.com",
        reminders: {
          useDefault: true
        },
        extendedProperties: {
          private: {
            everyoneDeclinedDismissed: "-1"
          }
        },
        htmlLink:
          "https://www.google.com/calendar/event?eid=MG12cTl0OGpnZHQ2N3Y1dTR1ZWQ5M2VjOGUgbm9sb2d5LmlvXzVzbWhlYWluY20yc2tkMXRjbXZ2N20zN2Q4QGc",
        sequence: 0,
        updated: "2019-05-07T11:14:30.478Z",
        summary: "Shea in 'Street Tap'",
        start: {
          date: "2019-06-12"
        },
        etag: '"3114455340956000"',
        transparency: "transparent",
        organizer: {
          self: true,
          displayName: "Interpretive Dance Institute",
          email:
            "nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com"
        },
        creator: {
          email: "liam@nology.io"
        },
        id: "0mvq9t8jgdt67v5u4ued93ec8e"
      },
      {
        status: "confirmed",
        kind: "calendar#event",
        end: {
          dateTime: "2019-10-11T00:00:00+01:00"
        },
        created: "2019-05-07T11:15:01.000Z",
        iCalUID: "3qc5cjfc2u4b65c9tc4cvkbbkg@google.com",
        reminders: {
          useDefault: true
        },
        extendedProperties: {
          private: {
            everyoneDeclinedDismissed: "-1"
          }
        },
        htmlLink:
          "https://www.google.com/calendar/event?eid=M3FjNWNqZmMydTRiNjVjOXRjNGN2a2Jia2cgbm9sb2d5LmlvXzVzbWhlYWluY20yc2tkMXRjbXZ2N20zN2Q4QGc",
        sequence: 1,
        updated: "2019-08-27T07:27:02.231Z",
        summary: "Shea and Craig in 'A lovers quarrel'",
        start: {
          dateTime: "2019-10-10T19:00:00+01:00"
        },
        etag: '"3133781644462000"',
        organizer: {
          self: true,
          displayName: "Interpretive Dance Institute",
          email:
            "nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com"
        },
        creator: {
          email: "liam@nology.io"
        },
        id: "3qc5cjfc2u4b65c9tc4cvkbbkg"
      },
      {
        status: "confirmed",
        kind: "calendar#event",
        end: {
          dateTime: "2019-09-06T15:00:00+01:00"
        },
        created: "2019-05-03T11:03:37.000Z",
        iCalUID: "6h4m3f9j3r3h4btmghogrnk9f9@google.com",
        reminders: {
          useDefault: true
        },
        extendedProperties: {
          private: {
            everyoneDeclinedDismissed: "-1"
          }
        },
        htmlLink:
          "https://www.google.com/calendar/event?eid=Nmg0bTNmOWozcjNoNGJ0bWdob2dybms5Zjkgbm9sb2d5LmlvXzVzbWhlYWluY20yc2tkMXRjbXZ2N20zN2Q4QGc",
        sequence: 1,
        updated: "2019-08-27T07:27:14.875Z",
        summary: "Shea Murphy to perform 'swan lake in doc martins'",
        start: {
          dateTime: "2019-09-06T13:00:00+01:00"
        },
        etag: '"3133781669750000"',
        organizer: {
          self: true,
          displayName: "test public calendar",
          email:
            "nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com"
        },
        creator: {
          email: "liam@nology.io"
        },
        id: "6h4m3f9j3r3h4btmghogrnk9f9"
      },
      {
        status: "confirmed",
        kind: "calendar#event",
        end: {
          date: "2019-09-18"
        },
        created: "2019-08-27T07:27:41.000Z",
        iCalUID: "58n9i2jp6v081bi5gumr74d0kq@google.com",
        reminders: {
          useDefault: true
        },
        htmlLink:
          "https://www.google.com/calendar/event?eid=NThuOWkyanA2djA4MWJpNWd1bXI3NGQwa3Egbm9sb2d5LmlvXzVzbWhlYWluY20yc2tkMXRjbXZ2N20zN2Q4QGc",
        sequence: 0,
        updated: "2019-08-27T07:27:41.400Z",
        summary: "Free yourself jump around",
        start: {
          date: "2019-09-17"
        },
        etag: '"3133781722800000"',
        transparency: "transparent",
        organizer: {
          self: true,
          displayName: "Interpretive Dance Institute",
          email:
            "nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com"
        },
        creator: {
          email: "liam@nology.io"
        },
        id: "58n9i2jp6v081bi5gumr74d0kq"
      },
      {
        status: "confirmed",
        kind: "calendar#event",
        end: {
          dateTime: "2019-12-19T10:30:00Z"
        },
        created: "2019-08-27T07:27:53.000Z",
        iCalUID: "0bqr6qa107efill1cpttcicnci@google.com",
        reminders: {
          useDefault: true
        },
        htmlLink:
          "https://www.google.com/calendar/event?eid=MGJxcjZxYTEwN2VmaWxsMWNwdHRjaWNuY2kgbm9sb2d5LmlvXzVzbWhlYWluY20yc2tkMXRjbXZ2N20zN2Q4QGc",
        sequence: 1,
        updated: "2019-08-27T07:28:00.485Z",
        summary: "Dance of the sausage dogs",
        start: {
          dateTime: "2019-12-19T10:00:00Z"
        },
        etag: '"3133781760970000"',
        transparency: "transparent",
        organizer: {
          self: true,
          displayName: "Interpretive Dance Institute",
          email:
            "nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com"
        },
        creator: {
          email: "liam@nology.io"
        },
        id: "0bqr6qa107efill1cpttcicnci"
      },
      {
        status: "confirmed",
        kind: "calendar#event",
        end: {
          dateTime: "2020-01-14T16:00:00Z"
        },
        created: "2019-08-27T07:46:04.000Z",
        iCalUID: "7djtg4fgfflb0eqfic59jv8fo3@google.com",
        reminders: {
          useDefault: true
        },
        htmlLink:
          "https://www.google.com/calendar/event?eid=N2RqdGc0ZmdmZmxiMGVxZmljNTlqdjhmbzMgbm9sb2d5LmlvXzVzbWhlYWluY20yc2tkMXRjbXZ2N20zN2Q4QGc",
        sequence: 0,
        updated: "2019-08-27T07:46:04.673Z",
        summary: "Accumulation of all",
        start: {
          dateTime: "2020-01-14T15:00:00Z"
        },
        etag: '"3133783929346000"',
        organizer: {
          self: true,
          displayName: "Interpretive Dance Institute",
          email:
            "nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com"
        },
        creator: {
          email: "liam@nology.io"
        },
        id: "7djtg4fgfflb0eqfic59jv8fo3"
      },
      {
        status: "confirmed",
        kind: "calendar#event",
        end: {
          dateTime: "2019-08-28T05:00:00+01:00"
        },
        created: "2019-08-27T07:47:29.000Z",
        iCalUID: "06cug6fdvgldf79t18e51uc86i@google.com",
        reminders: {
          useDefault: true
        },
        htmlLink:
          "https://www.google.com/calendar/event?eid=MDZjdWc2ZmR2Z2xkZjc5dDE4ZTUxdWM4Nmkgbm9sb2d5LmlvXzVzbWhlYWluY20yc2tkMXRjbXZ2N20zN2Q4QGc",
        sequence: 0,
        updated: "2019-08-27T07:47:29.231Z",
        summary: "Barry's Clarity of line",
        start: {
          dateTime: "2019-08-27T17:00:00+01:00"
        },
        etag: '"3133784098462000"',
        organizer: {
          self: true,
          displayName: "Interpretive Dance Institute",
          email:
            "nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com"
        },
        creator: {
          email: "liam@nology.io"
        },
        id: "06cug6fdvgldf79t18e51uc86i"
      },
      {
        status: "confirmed",
        kind: "calendar#event",
        end: {
          timeZone: "Europe/London",
          dateTime: "2019-09-24T13:00:00+01:00"
        },
        created: "2019-08-27T07:49:06.000Z",
        iCalUID: "2gefvvfuk3kpsjm33m59db5e4o@google.com",
        reminders: {
          useDefault: true
        },
        htmlLink:
          "https://www.google.com/calendar/event?eid=MmdlZnZ2ZnVrM2twc2ptMzNtNTlkYjVlNG9fMjAxOTA5MjRUMTEwMDAwWiBub2xvZ3kuaW9fNXNtaGVhaW5jbTJza2QxdGNtdnY3bTM3ZDhAZw",
        sequence: 0,
        updated: "2019-08-27T07:49:06.152Z",
        summary: "Open mic lunch time dance off",
        recurrence: ["RRULE:FREQ=WEEKLY;BYDAY=TU"],
        start: {
          timeZone: "Europe/London",
          dateTime: "2019-09-24T12:00:00+01:00"
        },
        etag: '"3133784292304000"',
        organizer: {
          self: true,
          displayName: "Interpretive Dance Institute",
          email:
            "nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com"
        },
        creator: {
          email: "liam@nology.io"
        },
        id: "2gefvvfuk3kpsjm33m59db5e4o"
      }
    ],
    updated: "2019-08-27T07:49:06.152Z",
    summary: "Interpretive Dance Institute",
    etag: '"p330a95sep2he80g"',
    nextSyncToken: "CMCkl47IouQCEMCkl47IouQCGAE=",
    timeZone: "Europe/London",
    accessRole: "reader"
  }
];

describe("Cards Tests", () => {
  let component;
  let testFunction;

  beforeEach(() => {
    testFunction = jest.fn();
    component = mount(<Cards events={mockData} />);
  });

  it("should render one instance of card component for each event in the events state", () => {
    component.setState({
      events: mockData
    });
    const numberCardsRendered = component.find(Card).length;
    const numberDataObjects = mockData.length;

    expect(numberCardsRendered).toEqual(numberDataObjects);
  });
});
