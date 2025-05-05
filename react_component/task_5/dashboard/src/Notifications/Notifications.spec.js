import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  let wrapper;

  describe('displayDrawer=false', () => {
    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer={false} />);
    });

    it('renders without crashing', () => { });

    it('renders menuItem', () => {
      expect(wrapper.find('.menuItem')).toHaveLength(1);
    });

    it('does not render div.Notifications', () => {
      expect(wrapper.find('div.Notifications')).toHaveLength(0);
    });
  });

  describe('displayDrawer=true', () => {
    describe('listNotifications = []', () => {
      beforeEach(() => {
        wrapper = shallow(<Notifications displayDrawer={true} />);
      });

      it('renders without crashing', () => { });

      it('renders row "No new notification for now"', () => {
        const item = wrapper.find('NotificationItem');
        expect(item).toHaveLength(1);
        expect(item.prop('value')).toEqual('No new notification for now');
      });

      it('does not render p>Here is the list of notifications', () => {
        expect(wrapper.find('p')).toHaveLength(0);
        expect(wrapper.text()).not.toContain('Here is the list of notifications');
      });
    });

    describe('listNotifications = [...]', () => {
      const listNotifications = [
        { id: 1, type: 'default', value: 'test1' },
        { id: 2, type: 'urgent', value: 'test2' },
        {
          id: 3, type: 'urgent', html: {
            __html: '<u>test3</u>'
          }
        }
      ];

      beforeEach(() => {
        wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
      });

      it('renders three NotificationItems', () => {
        expect(wrapper.find('NotificationItem')).toHaveLength(3);
      });

      it('renders the text `Here is the list of notifications`', () => {
        expect(wrapper.find({ children: 'Here is the list of notifications' })).toHaveLength(1);
      });

      it('renders the items correctly', () => {
        listNotifications.forEach(notification => {
          const item = wrapper.find('NotificationItem').filterWhere((n) => n.key() === notification.id.toString());
          expect(item).toHaveLength(1);
          expect(item.prop('type')).toEqual(notification.type);
          if (notification.value)
             expect(item.prop('value')).toEqual(notification.value);
          if (notification.html)
             expect(item.prop('html')).toEqual(notification.html);
        });
      });
    });
  });

  it('logs the correct message when markAsRead is called', () => {
    const logMock = jest.spyOn(console, 'log').mockImplementation(() => { });

    wrapper = shallow(<Notifications />);
    wrapper.instance().markAsRead(-1);

    expect(logMock).toBeCalledWith('Notification -1 has been marked as read');

    logMock.mockRestore();
  });

  it('does not rerender when updating the props with the same list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'test1' }
    ];

    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    const renderMock = jest.spyOn(wrapper.instance(), 'render');

    wrapper.setProps({listNotifications: listNotifications});
    expect(renderMock.mock.calls.length).toEqual(0);

    renderMock.mockRestore();
  });

  it('does rerender when updating the props with a bigger list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'test1' }
    ];

    const biggerList = [
      ...listNotifications,
      { id: 2, type: 'urgent', value: 'test2' }
    ];

    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    const renderMock = jest.spyOn(wrapper.instance(), 'render');

    wrapper.setProps({listNotifications: biggerList});
    expect(renderMock.mock.calls.length).toEqual(1);

    renderMock.mockRestore();
  });
});
