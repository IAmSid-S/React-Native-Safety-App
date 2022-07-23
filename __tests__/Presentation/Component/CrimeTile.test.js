
import renderer from 'react-test-renderer'
import CrimeTile from '../../../src/Presentation/Components/Crime/CrimeTile'


describe('Crime Tile Component', () => {

    it('should load successfully', () => {
        const tree = renderer.create(<CrimeTile count={10} type='Burglary' key={10} />)
        expect(tree).toBeTruthy()
    }),

    it('should show Crime', () => {
        const tree = renderer.create(<CrimeTile count={10} type='Burglary' key={10} />).toJSON()
        expect(tree.children[0].children[0].children[0]).toBe('Burglary')
        
    }),
    it('should show Crime count', () => {
        const tree = renderer.create(<CrimeTile count={10} type='Burglary' key={10} />).toJSON()
        expect(tree.children[1].children[0].children[0]).toBe('10')
        
    })
})